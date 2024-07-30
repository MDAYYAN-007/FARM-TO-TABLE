"use client";
import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    productName: "Organic Apples",
    price: "₹150",
    state: "Karnataka",
    district: "Bengaluru",
    description: "Fresh, organic apples from the best orchards.",
    imageUrl: "/images/apples.jpg",
  },
  {
    id: 2,
    productName: "Green Spinach",
    price: "₹60",
    state: "Tamil Nadu",
    district: "Chennai",
    description: "Locally grown, nutrient-rich green spinach.",
    imageUrl: "/images/spinach.jpg",
  },
  {
    id: 3,
    productName: "Brown Rice",
    price: "₹120",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    description: "Healthy and nutritious brown rice for daily consumption.",
    imageUrl: "/images/rice.jpg",
  },
  {
    id: 4,
    productName: "Sweet Bananas",
    price: "₹80",
    state: "Kerala",
    district: "Kochi",
    description: "Naturally sweet bananas, perfect for snacking.",
    imageUrl: "/images/bananas.jpg",
  },
  {
    id: 5,
    productName: "Red Tomatoes",
    price: "₹90",
    state: "Maharashtra",
    district: "Pune",
    description: "Juicy, ripe tomatoes ideal for cooking and salads.",
    imageUrl: "/images/tomatoes.jpg",
  },
  {
    id: 6,
    productName: "Almonds",
    price: "₹500",
    state: "Rajasthan",
    district: "Jaipur",
    description: "Premium quality almonds, rich in nutrients.",
    imageUrl: "/images/almonds.jpg",
  },
];

const ProductsPage = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Products Sold by You</h1>
      <div className="mx-auto">
        <table className="mx-auto bg-white border border-gray-200 rounded-lg shadow-lg w-5/6">
          <thead>
            <tr className="bg-gray-100 text-white">
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">State</th>
              <th className="py-2 px-4 border-b">District</th>
              <th className="py-2 px-4 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">
                  <div className="relative w-16 h-16">
                    <Image
                      src={product.imageUrl}
                      alt={product.productName}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </td>
                <td className="py-2 px-4 border-b">{product.productName}</td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">{product.state}</td>
                <td className="py-2 px-4 border-b">{product.district}</td>
                <td className="py-2 px-4 border-b max-w-xs break-words">{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
