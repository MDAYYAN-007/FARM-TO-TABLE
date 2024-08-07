"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import getFruitsData from "@/actions/getFruitsData";
import Loader from "@/components/Loader";
import Image from "next/image";
import addToCart from "@/actions/addToCart";

const FruitList = () => {
  const { data: session, status } = useSession();
  const [fruits, setFruits] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (session) {
      const fetchFruits = async () => {
        const fruitData = await getFruitsData(session.user.email);
        setFruits(fruitData);
        if(fruitData!==null){
          setQuantities(fruitData.reduce((acc, fruit) => ({ ...acc, [fruit.id]: 0 }), {}));
        }
        setLoading(false);
      };
      

      fetchFruits();
    }else{
      setLoading(false)
    }
  }, [session]);

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => {
      const updatedQuantity = prevQuantities[id] + 1;
      const fruit = fruits.find((fruit) => fruit.id === id);
      if (updatedQuantity <= fruit.available_units) {
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

  const handleAddToCart = async (fruit) => {
    
    const quantity = quantities[fruit.id];
    if (quantity > 0) {
      try {
        await addToCart(fruit,quantity,session.user.email);
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

  if (fruits && fruits.length > 0) {
    return (
      <div className="min-h-75vh mx-auto py-8">
        <h1 className="text-3xl font-bold text-center">Fresh Fruits</h1>
        <p className="text-gray-700 mb-6 text-center">
          Discover a variety of fresh, organic fruits from local farmers. Enjoy healthy and delicious options for every meal.
        </p>
        <div className="mx-10 flex gap-4 flex-wrap justify-center">
          {fruits.length === 0 ? (
            <p className="text-center text-gray-500">No Fruits available</p>
          ) : (
            fruits.map((fruit) => (
              <div key={fruit.id} className="bg-white h-max w-72 min-w-72 shadow-lg rounded-lg p-4 md:p-6">
                <Image
                  src={fruit.product_image}
                  alt={fruit.product_name}
                  width={640}
                  height={480}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{fruit.product_name}</h2>
                
                <p className="text-lg font-bold mb-2">₹{fruit.price} per kg</p>
                <p className="text-sm text-gray-600 mb-2">In stock: {fruit.available_units}</p>
                <div className="flex items-center mb-2">
                  <button
                    type="button"
                    onClick={() => handleDecrement(fruit.id)}
                    className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  >
                    -
                  </button>
                  <span className="mx-4">{quantities[fruit.id]}</span>
                  <button
                    type="button"
                    onClick={() => handleIncrement(fruit.id)}
                    className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(fruit)}
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
        <h1 className="text-3xl font-bold text-center">Fresh Fruits</h1>
        <p className="text-gray-700 mb-6 text-center">
          Discover a variety of fresh, organic fruits from local farmers. Enjoy healthy and delicious options for every meal.
        </p>
        <p>No products to display</p>
      </div>
    );
  }
}

export default FruitList;
