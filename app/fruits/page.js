"use client";
import React, { useState, useEffect } from "react";
import getFruitsData from "@/actions/getFruitsData";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";
import Image from "next/image";
import Link from "next/link";

const FruitList = () => {
  const { data: session, status } = useSession();
  const [fruits, setFruits] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchFruits = async () => {
      const fruitData = await getFruitsData();
      setFruits(fruitData);
      setQuantities(fruitData.reduce((acc, fruit) => ({ ...acc, [fruit.id]: 0 }), {}));
    };

    fetchFruits();
  }, []);

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

  const handleAddToCart = (id) => {
    console.log(`Adding fruit with ID ${id} to cart with quantity ${quantities[id]}`);
    // Add your add-to-cart logic here
  };

  if (status === "loading") {
    return <Loader />;
  }

  if (!session) {
    return (
      <div className="min-h-75vh flex flex-col gap-4 justify-center items-center">
        <p className="text-xl font-bold">You need to login first!</p>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2"
        >
          <Link href="/login">Go To Login</Link>
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

        <div className="fruit-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fruits.length === 0 ? (
            <p className="text-center text-gray-500">No Fruits available</p>
          ) : (
            fruits.map((fruit) => (
              <div key={fruit.id} className="bg-white shadow-lg rounded-lg p-4 md:p-6">
                <Image
                  src={fruit.product_image}
                  alt={fruit.product_name}
                  width={640}
                  height={480}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{fruit.product_name}</h2>
                <p className="text-gray-700 mb-4">{fruit.description}</p>
                <p className="text-lg font-bold mb-4">₹{fruit.price} per kg</p>
                <p className="text-sm text-gray-600 mb-4">In stock: {fruit.available_units}</p>
                <div className="flex items-center mb-4">
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
                    onClick={() => handleAddToCart(fruit.id)}
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
  }else {
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
