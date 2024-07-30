import React from 'react';

const orders = [
  {
    id: 1,
    product_name: 'Tomato',
    state: 'Karnataka',
    district: 'Bangalore',
    price: 20,
    quantity: 2,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    product_name: 'Cabbage',
    state: 'Maharashtra',
    district: 'Pune',
    price: 30,
    quantity: 1,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    product_name: 'Carrot',
    state: 'Tamil Nadu',
    district: 'Chennai',
    price: 15,
    quantity: 5,
    image: 'https://via.placeholder.com/150'
  },
];

const OrdersPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Orders</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg text-center">
        <thead>
          <tr className="bg-gray-100 text-white">
            <th className="py-2 px-2 border-b max-w-44">Image</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">State</th>
            <th className="py-2 px-4 border-b">District</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className='hover:bg-gray-50'>
              <td className="py-2 px-4 border-b max-w-44">
                <img src={order.image} alt={order.product_name} className="w-20 h-20 object-cover m-auto" />
              </td>
              <td className="py-2 px-4 border-b">{order.product_name}</td>
              <td className="py-2 px-4 border-b">{order.state}</td>
              <td className="py-2 px-4 border-b">{order.district}</td>
              <td className="py-2 px-4 border-b">₹{order.price}</td>
              <td className="py-2 px-4 border-b">{order.quantity}</td>
              <td className="py-2 px-4 border-b">₹{order.price * order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
