"use client";
import React from "react";

const CartPage = () => {
  // Sample data
  const cartItems = [
    { product_id: 1, product_name: "Apple", price: 3.0, quantity: 3, total_cost: 9.0, image: "/images/apple.jpg" },
    { product_id: 2, product_name: "Orange", price: 3.0, quantity: 2, total_cost: 6.0, image: "/images/orange.jpg" },
    { product_id: 3, product_name: "Banana", price: 1.5, quantity: 5, total_cost: 7.5, image: "/images/banana.jpg" },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.total_cost,
    0
  );

  // Sample removeFromCart function
  const removeFromCart = (id) => {
    console.log(`Removed item with ID: ${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg text-center">
        <thead>
          <tr className="bg-gray-100 text-white">
            <th className="py-2 px-2 border-b">Image</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Price (₹)</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Total Cost (₹)</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.product_id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">
                <img src={item.image} alt={item.product_name} className="w-24 h-24 object-cover m-auto" />
              </td>
              <td className="py-2 px-4 border-b">{item.product_name}</td>
              <td className="py-2 px-4 border-b">₹{item.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{item.quantity}</td>
              <td className="py-2 px-4 border-b">₹{item.total_cost.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => removeFromCart(item.product_id)}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Price */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Total: ₹{totalPrice.toFixed(2)}
        </h2>
        <a
          href="/checkout"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          Checkout
        </a>
      </div>
    </div>
  );
};

export default CartPage;
