"use client"
import React, { useState } from 'react';

const grains = [
  {
    id: 1,
    product_name: 'Rice',
    description: 'High-quality long grain rice.',
    price: 60,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    product_name: 'Wheat',
    description: 'Organic whole wheat.',
    price: 45,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    product_name: 'Barley',
    description: 'Fresh and nutritious barley.',
    price: 35,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    product_name: 'Quinoa',
    description: 'Gluten-free super grain quinoa.',
    price: 120,
    image: 'https://via.placeholder.com/150'
  }
];

const GrainList = () => {
  const [quantities, setQuantities] = useState(
    grains.reduce((acc, grain) => ({ ...acc, [grain.id]: 0 }), {})
  );

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, prevQuantities[id] - 1)
    }));
  };

  const handleAddToCart = (id) => {
    console.log(`Adding grain with ID ${id} to cart with quantity ${quantities[id]}`);
    // Add your add-to-cart logic here
  };

  return (
    <div className="mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">Fresh Grains</h1>
      <p className="text-gray-700 mb-6 text-center">
        Discover a variety of fresh, organic grains from local farmers. Enjoy healthy and nutritious options for every meal.
      </p>

      <div className="grain-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {grains.length === 0 ? (
          <p className="text-center text-gray-500">No grains available</p>
        ) : (
          grains.map((grain) => (
            <div key={grain.id} className="bg-white shadow-lg rounded-lg p-4 md:p-6">
              <img src={grain.image} alt={grain.product_name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{grain.product_name}</h2>
              <p className="text-gray-700 mb-4">{grain.description}</p>
              <p className="text-lg font-bold mb-4">₹{grain.price} per kg</p>
              <div className="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => handleDecrement(grain.id)}
                  className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
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
                  onClick={() => handleAddToCart(grain.id)}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                  Add to Cart
                </button>
                <a href="/cart" className="bg-green-550 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                  Buy Now
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 text-center">
        <a href="/cart" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">View Cart</a>
      </div>
    </div>
  );
};

export default GrainList;
