"use client";
import React, { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { useSession,signIn } from "next-auth/react";
import Link from "next/link";
import states from "@/statesndist";
import Loader from "@/components/Loader";
import getImageLink from "@/actions/getImageLink";
import getUserProfile from "@/actions/getUserProfile";
import storeProductData from "@/actions/storeProductData";

const Sell = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState({});

  const { register, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues: {
      productType: "",
      state: "",
      district: "",
      price: "",
      availableUnits: 1,
      address: "",
      pincode: "",
    },
  });

  const selectedState = watch("state");

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (session) {
        const data = await getUserProfile(session.user.email);
        console.log(data);
        setUserData(data);
        reset({
          productType: "",
          state: data.state || "",
          district: data.district || "",
          address: data.address || "",
          pincode: data.pincode || "",
        });
      }
    };
    
    fetchUserProfile();
  },[session,reset])

  useEffect(() => {
    if (selectedState) {
      setValue("district", "");
    }
  }, [selectedState, setValue]);

  const onSubmit = async (data) => {
    const imageLinks = await getImageLink(data.productName);
    const imageLink = imageLinks[0];
    await storeProductData(data,session?.user?.email, imageLink);
    reset();
  };

  // Check if session is still loading
  if (session === undefined) {
    return (
      <>
        <Loader/>
      </>
    );
  }

  if (session?.user?.isProfileComplete) {
    return (
      <>
        <div
          className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden my-6 backdrop-blur-[2px]"
          style={{
            backgroundImage: "url('/images/sell_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full p-6 bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-center text-black">
              Sell Your Products
            </h2>
            <p className="mb-6 text-center text-black font-semibold">
              Fill out the form below to list your products for sale on our platform.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="productName"
                  className="block text-md font-semibold text-black"
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
                  min={1}
                  {...register("price", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
                />
              </div>
              <div>
                <label
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
                  disabled
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
                  disabled
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
                  htmlFor="pincode"
                  className="block text-md font-semibold text-black"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  placeholder="Enter your pincode"
                  {...register("pincode", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
                  disabled
                />
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
                  disabled
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="sell-btn text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  } else if (session) {
    return (
      <>
        <div className="min-h-80vh flex flex-col gap-4 justify-center items-center">
          <p className="text-xl font-bold">You need to fill your details first!</p>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2"
          >
            <Link href="/login">Go To Dashboard</Link>
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div className="min-h-75vh flex flex-col gap-4 justify-center items-center">
        <p className="text-xl font-bold">You need to login first!</p>
        <button className="flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-lg font-medium dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={() => signIn("google")}>
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
};

export default Sell;
