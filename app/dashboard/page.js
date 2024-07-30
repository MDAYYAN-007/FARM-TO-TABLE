"use client";
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
import states from "@/statesndist";

const Dashboard = () => {
  const { data: session } = useSession();

=======
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import states from "@/statesndist";

const Dashboard = () => {
<<<<<<< HEAD
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
  const [userData, setUserData] = useState({});

  const defaultValues = userData
    ? {
        name: userData.name || "",
        email: userData.email || "",
        state: userData.state || "",
        district: userData.district || "",
        address: userData.address || "",
<<<<<<< HEAD
<<<<<<< HEAD
        pincode: userData.pincode || "", // Include pincode in defaultValues
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
      }
    : {
        name: "",
        email: "",
        state: "",
        district: "",
        address: "",
<<<<<<< HEAD
<<<<<<< HEAD
        pincode: "", // Include pincode in defaultValues
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
      };

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues,
  });

  const selectedState = watch("state");

  useEffect(() => {
    if (selectedState) {
      setValue("district", "");
    }
  }, [selectedState, setValue]);

  const onSubmit = (data) => {
    console.log("User Data Submitted:", data);
<<<<<<< HEAD
<<<<<<< HEAD

    setUserData(data);
  };

  if (session) {
    return (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-6 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          User Dashboard
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
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
              className="block text-sm font-medium text-gray-700"
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
              htmlFor="pincode"
              className="block text-sm font-medium text-gray-700"
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
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
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
              className="dash-btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-550 focus:ring-opacity-50"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
  }

  return(
    <>
    <div className="min-h-80vh flex flex-col gap-4 justify-center items-center">
      <p className="text-xl font-bold">U need to login first!</p>
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2">
              <Link href="/login" >
                Go To Login
              </Link>
            </button>
    </div>
    </>
  )
=======
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
    setUserData(data);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-6 p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        User Dashboard
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            {...register("name", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
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
            className="block text-sm font-medium text-gray-700"
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
            className="block text-sm font-medium text-gray-700"
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
            className="bg-green-550 text-white font-bold py-2 px-4 rounded hover:bg-green-555 focus:outline-none focus:ring-2 focus:ring-green-550 focus:ring-opacity-50"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
<<<<<<< HEAD
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
};

export default Dashboard;
