"use client";
import React, { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import getOrdersPlaced from '@/actions/getOrdersPlaced';
import Loader from '@/components/Loader';

const OrdersPlacedPage = () => {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (session) {
      const fetchOrders = async () => {
        try {
          const response = await getOrdersPlaced(session.user.email); // Fetch orders using your function
          setOrders(response);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };

      fetchOrders();
    }
  }, [session]);

  if (status === 'loading') {
    return <Loader />; // Add a Loader component to show loading state
  }

  if (!session) {
    return (
      <div className="min-h-75vh flex flex-col gap-4 justify-center items-center">
        <p className="text-xl font-bold">You need to login first!</p>
        <button
          className="flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-lg font-medium dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => signIn('google')}
        >
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

  return (
    <div className="min-h-75vh mx-auto p-3">
      <h1 className="text-3xl font-bold text-center my-4">Orders Placed</h1>
      <div className="overflow-x-auto">
      <table className="table-auto bg-white border border-gray-200 rounded-lg shadow-lg text-center mx-auto">
        <thead>
          <tr className="bg-gray-100 text-white">
            <th className="py-2 px-2 border-b min-w-32">Image</th>
            <th className="py-2 px-4 border-b min-w-28">Product Name</th>
            <th className="py-2 px-4 border-b min-w-28">Price</th>
            <th className="py-2 px-4 border-b min-w-28">Quantity</th>
            <th className="py-2 px-4 border-b min-w-28">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-4">No orders found</td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id} className='hover:bg-gray-50'>
                <td className="py-2 px-4 border-b max-w-44">
                  <img src={order.product_image} alt={order.product_name} className="w-20 h-20 object-cover m-auto" />
                </td>
                <td className="py-2 px-4 border-b">{order.product_name}</td>
                <td className="py-2 px-4 border-b">₹{order.price}</td>
                <td className="py-2 px-4 border-b">{order.quantity}</td>
                <td className="py-2 px-4 border-b">₹{order.price * order.quantity}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default OrdersPlacedPage;
