import React from "react";
import Image from "next/image";

const Buy = () => {
  return (
    <div>
      <div className="mx-auto my-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Explore Fresh Produce
        </h1>
        <div className="flex flex-col space-y-6 justify-center items-center">
          {/* <!-- Fruits Section --> */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2 min-w-96">
            <div className="relative w-full h-48 ">
              <Image
                src="/images/fruits.jpg"
                alt="Fruits"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Fresh Fruits</h2>
              <p className="text-gray-700 mb-4">
                Discover a variety of fresh, organic fruits directly from local
                farmers.
              </p>
              <a
                href="/fruits"
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
              >
                View Fruits
              </a>
            </div>
          </div>
          {/* <!-- Vegetables Section --> */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
            <div className="relative w-full h-48">
              <Image
                src="/images/vegetables.jpg"
                alt="Vegetables"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Fresh Vegetables</h2>
              <p className="text-gray-700 mb-4">
                Explore a range of fresh, organic vegetables sourced from local
                farms.
              </p>
              <a
                href="/vegetables"
                className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
              >
                View Vegetables
              </a>
            </div>
          </div>
          {/* <!-- Grains Section --> */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
            <div className="relative w-full h-48">
              <Image
                src="/images/grains.png"
                alt="Grains"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Organic Grains, Pulses and Nuts</h2>
              <p className="text-gray-700 mb-4">
                Find a selection of organic grains, pulses and nuts for all your culinary needs.
              </p>
              <a
                href="/grains"
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
              >
                View Grains
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;