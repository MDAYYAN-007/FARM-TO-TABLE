"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import getProductsData from "@/actions/getProductData";
import Loader from "@/components/Loader";
import Link from "next/link";
import deleteProduct from "@/actions/deleteProduct"; 

const ProductsPage = () => {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (session) {
        const result = await getProductsData(session.user.email);
        setProducts(result);
      }
    };

    fetchProducts();
  }, [session]);

  const handleDelete = async (productId) => {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (!confirmed) {
      return; // Exit the function if the user cancels the deletion
    }

    try {
      await deleteProduct(productId);
      const result = await getProductsData(session.user.email);
      setProducts(result);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
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

  if (products && products.length > 0) {
    return (
      <div className="py-8 text-center">
        <h1 className="text-3xl font-bold text-center mb-6">Products Sold by You</h1>
        <div className="mx-auto">
          <table className="mx-auto bg-white border border-gray-200 rounded-lg shadow-lg w-5/6">
            <thead>
              <tr className="bg-gray-100 text-white">
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Available Units</th>
                <th className="py-2 px-4 border-b">State</th>
                <th className="py-2 px-4 border-b">District</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">
                    <div className="relative w-16 h-16">
                      <Image
                        src={product.product_image}
                        alt={product.product_name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">{product.product_name}</td>
                  <td className="py-2 px-4 border-b">{product.price}</td>
                  <td className="py-2 px-4 border-b">{product.available_units}</td>
                  <td className="py-2 px-4 border-b">{product.state}</td>
                  <td className="py-2 px-4 border-b">{product.district}</td>
                  <td className="py-2 px-4 border-b max-w-xs break-words">{product.product_desc}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-75vh flex flex-col gap-4 justify-center items-center">
        No products to display
      </div>
    );
  }
};

export default ProductsPage;
