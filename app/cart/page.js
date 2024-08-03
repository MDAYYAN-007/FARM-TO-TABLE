"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Loader from "@/components/Loader";
import getCartItems from "@/actions/getCartItems";
import deleteFromCart from "@/actions/deleteCartItems";
import placeOrder from "@/actions/placeOrder";

const CartPage = () => {
  const { data: session, status } = useSession();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderMessage, setOrderMessage] = useState("");

  useEffect(() => {
    if (session) {
      const fetchCartItems = async () => {
        try {
          const response = await getCartItems(session.user.email);
          setCartItems(response);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCartItems();
    }else{
      setLoading(false)
    }
  }, [session]);

  const totalPrice = cartItems.reduce((total, item) => total + item.total_cost, 0);

  const removeFromCart = async (productId) => {
    if (session) {
      const confirmed = confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        await deleteFromCart(productId, session.user.email);
        setCartItems(cartItems.filter((item) => item.product_id !== productId));
      }
    }
  };

  const handlePlaceOrder = async () => {
    if (session) {
      setLoading(true);
      const response = await placeOrder(session.user.email);
      setLoading(false);
      setOrderMessage(response.message);
      if (response.success) {
        setCartItems([]);
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
        <button
          className="flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-lg font-medium dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => signIn("google")}
        >
          <img src="/images/googleicon.png" alt="Google Icon" className="h-8 w-8 mr-2" />
          <span>Continue with Google</span>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-75vh mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

      {orderMessage && (
        <div className="text-center mb-4">
          <p className="text-xl font-bold">{orderMessage}</p>
        </div>
      )}

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
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="6" className="py-4">No items in cart</td>
            </tr>
          ) : (
            cartItems.map((item) => (
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
            ))
          )}
        </tbody>
      </table>

      {/* Total Price */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Total: ₹{totalPrice.toFixed(2)}
        </h2>
        <button
          onClick={handlePlaceOrder}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
