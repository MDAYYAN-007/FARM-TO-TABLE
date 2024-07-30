"use client"
import React, { useState } from 'react';

const fruits = [
  {
    id: 1,
    product_name: 'Tomato',
    description: 'Fresh and organic tomatoes.',
    price: 50,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    product_name: 'Cucumber',
    description: 'Crisp and refreshing cucumbers.',
    price: 30,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    product_name: 'Carrot',
    description: 'Sweet and crunchy carrots.',
    price: 40,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    product_name: 'Bell Pepper',
    description: 'Colorful and tasty bell peppers.',
    price: 70,
    image: 'https://via.placeholder.com/150'
  }
];

const FruitList = () => {
  const [quantities, setQuantities] = useState(
    fruits.reduce((acc, fruit) => ({ ...acc, [fruit.id]: 0 }), {})
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
    console.log(`Adding fruit with ID ${id} to cart with quantity ${quantities[id]}`);
    // Add your add-to-cart logic here
  };

  return (
    <div className="mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">Fresh Vegetables</h1>
      <p className="text-gray-700 mb-6 text-center">
        Discover a variety of fresh, organic fruits from local farmers. Enjoy healthy and delicious options for every meal.
      </p>

      <div className="fruit-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {fruits.length === 0 ? (
          <p className="text-center text-gray-500">No veggies available</p>
        ) : (
          fruits.map((fruit) => (
            <div key={fruit.id} className="bg-white shadow-lg rounded-lg p-4 md:p-6">
              <img src={fruit.image} alt={fruit.product_name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{fruit.product_name}</h2>
              <p className="text-gray-700 mb-4">{fruit.description}</p>
              <p className="text-lg font-bold mb-4">₹{fruit.price} per kg</p>
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

export default FruitList;
