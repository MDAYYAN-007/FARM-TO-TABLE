"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import states from "@/statesndist";
import getImageLink from "@/actions/getImageLink";

const Sell = () => {
  const { register, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues: {
      productType: "",
      state: "",
      district: "",
      price: "",
<<<<<<< HEAD
<<<<<<< HEAD
      availableUnits: 1,
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
      description: "",
      address: "",
    },
  });

  const selectedState = watch("state");

  useEffect(() => {
    if (selectedState) {
      setValue("district", "");
    }
  }, [selectedState, setValue]);

  const onSubmit = async (data) => {
    const imageLinks = await getImageLink(data.productName);
    console.log(imageLinks);
    console.log("Form Data Submitted:", data);
    reset();
  };

  return (
    <>
      <div
        className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden my-6  backdrop-blur-[10px]"
        style={{
          backgroundImage: "url('/images/sell_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" w-full h-full p-6 bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            Sell Your Products
          </h2>
          <p className=" mb-6 text-center text-black font-semibold">
            Fill out the form below to list your products for sale on our
            platform.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="productName"
                className="block text-md font-semibold text-black "
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Enter the product name"
                {...register("productName", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="productType"
                className="block text-md font-semibold text-black"
              >
                Product Type
              </label>
              <select
                id="productType"
                name="productType"
                {...register("productType", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
              >
                <option value="" disabled>
                  Select product type
                </option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="grains">Grains</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-md font-semibold text-black"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter the price"
                step="1"
                {...register("price", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
              />
            </div>
            <div>
              <label
<<<<<<< HEAD
<<<<<<< HEAD
                htmlFor="availableUnits"
                className="block text-md font-semibold text-black"
              >
                Available Units
              </label>
              <input
                type="number"
                id="availableUnits"
                name="availableUnits"
                placeholder="Enter the available units"
                min="1"
                {...register("availableUnits", { required: true, min: 1 })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
              />
            </div>

            <div>
              <label
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
                htmlFor="description"
                className="block text-md font-semibold text-black"
              >
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Enter a brief description of the product"
                {...register("description", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-md font-semibold text-black"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                {...register("state", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
              >
                <option value="" disabled>
                  Select state
                </option>
                {states.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="district"
                className="block text-md font-semibold text-black"
              >
                District
              </label>
              <select
                id="district"
                name="district"
                {...register("district", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
              >
                <option value="" disabled>
                  Select district
                </option>
                {states
                  .find((s) => s.name === selectedState)
                  ?.districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-md font-semibold text-black"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="4"
                placeholder="Enter your address"
                {...register("address", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
<<<<<<< HEAD
<<<<<<< HEAD
                // className="bg-green-550 text-white font-bold py-2 px-4 rounded hover:bg-green-555 focus:outline-none focus:ring-2 focus:ring-green-550 focus:ring-opacity-50"
                className="sell-btn text-white font-bold py-2 px-4 rounded">
=======
                className="bg-green-550 text-white font-bold py-2 px-4 rounded hover:bg-green-555 focus:outline-none focus:ring-2 focus:ring-green-550 focus:ring-opacity-50"
              >
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
                className="bg-green-550 text-white font-bold py-2 px-4 rounded hover:bg-green-555 focus:outline-none focus:ring-2 focus:ring-green-550 focus:ring-opacity-50"
              >
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sell;
