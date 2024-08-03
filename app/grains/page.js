"use client";
import React, { useState, useEffect } from "react";
import getGrainsData from "@/actions/getGrainsData";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";
import Image from "next/image";

const GrainList = () => {
  const { data: session, status } = useSession();
  const [grains, setGrains] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (session) {
      const fetchGrains = async () => {
        const grainData = await getGrainsData(session.user.email);
        setGrains(grainData);
        if(grains !== null){
          setQuantities(grainData.reduce((acc, grain) => ({ ...acc, [grain.id]: 0 }), {}));
        }
        setLoading(false);
      };

      fetchGrains();
    }else{
      setLoading(false)
    }
  }, [session]);

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => {
      const updatedQuantity = prevQuantities[id] + 1;
      const grain = grains.find((grain) => grain.id === id);
      if (updatedQuantity <= grain.available_units) {
        return {
          ...prevQuantities,
          [id]: updatedQuantity
        };
      }
      return prevQuantities;
    });
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, prevQuantities[id] - 1)
    }));
  };

  const handleAddToCart = async (grain) => {
    
    const quantity = quantities[grain.id];
    if (quantity > 0) {
      try {
        await addToCart(grain,quantity,session.user.email);
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [fruit.id]: 0,
        }));
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  if (status === "loading" || loading) {
    return <Loader />;
  }

  if (!session) {
    return (
      <div className="min-h-75vh flex flex-col gap-4 justify-center items-center">
        <p className="text-xl font-bold">You need to login first!</p>
        <button className="flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-lg font-medium dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={() => signIn("google")}>
          <img
            src="/images/googleicon.png"
            alt="Google Icon"
            className="h-8 w-8 mr-2"
          />
          <span>Continue with Google</span>
        </button>
      </div>
    );
  }

  if (grains && grains.length > 0) {
    return (
      <div className="min-h-75vh mx-auto py-8">
        <h1 className="text-3xl font-bold text-center">Fresh Grains</h1>
        <p className="text-gray-700 mb-6 text-center">
          Discover a variety of fresh, organic grains from local farmers. Enjoy healthy and delicious options for every meal.
        </p>

        <div className="grain-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {grains.length === 0 ? (
            <p className="text-center text-gray-500">No grains available</p>
          ) : (
            grains.map((grain) => (
              <div key={grain.id} className="bg-white shadow-lg rounded-lg p-4 md:p-6">
                <Image
                  src={grain.product_image}
                  alt={grain.product_name}
                  width={640}
                  height={480}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{grain.product_name}</h2>
                <p className="text-gray-700 mb-4">{grain.description}</p>
                <p className="text-lg font-bold mb-4">₹{grain.price} per kg</p>
                <p className="text-sm text-gray-600 mb-4">In stock: {grain.available_units}</p>
                <div className="flex items-center mb-4">
                  <button
                    type="button"
                    onClick={() => handleDecrement(grain.id)}
                    className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  >
                    -
                  </button>
                  <span className="mx-4">{quantities[grain.id]}</span>
                  <button
                    type="button"
                    onClick={() => handleIncrement(grain.id)}
                    className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(grain)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    Add to Cart
                  </button>
                  <a
                    href="/cart"
                    className="bg-green-550 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/cart"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            View Cart
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-75vh flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-bold text-center">Fresh Grains</h1>
        <p className="text-gray-700 mb-6 text-center">
          Discover a variety of fresh, organic grains from local farmers. Enjoy healthy and delicious options for every meal.
        </p>
        <p>No products to display</p>
      </div>
    );
  }
};

export default GrainList;
