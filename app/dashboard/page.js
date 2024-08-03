"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useSession,signIn } from "next-auth/react";
import states from "@/statesndist";
import Loader from "@/components/Loader";
import getUserProfile from "@/actions/getUserProfile";
import storeUserProfile from "@/actions/storeUserProfile";

const Dashboard = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState({});

  const { register, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      state: "",
      district: "",
      address: "",
      pincode: "",
    },
  });

  const selectedState = watch("state");

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (session) {
        const data = await getUserProfile(session.user.email);
        setUserData(data);
        reset({
          name: data.name || session.user.name || "",
          email: session.user.email,
          state: data.state || "",
          district: data.district || "",
          address: data.address || "",
          pincode: data.pincode || "",
        });
      }
    };

    fetchUserProfile();
  }, [session, reset]);

  useEffect(() => {
    if (selectedState) {
      setValue("district", "");
    }
  }, [selectedState, setValue]);

  const onSubmit = async (data) => {
    console.log("User Data Submitted:", data);

    setUserData(data);

    await storeUserProfile(data);
  };

  if (session === undefined) {
    return (
      <>
        <Loader/>
      </>
    );
  }

  if (session) {
    return (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-6 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">User Dashboard</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 sm:text-sm bg-gray-200"
              disabled
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <select
              id="state"
              name="state"
              {...register("state", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 sm:text-sm"
            >
              <option value="" disabled>Select state</option>
              {states.map((state, index) => (
                <option key={index} value={state.name}>{state.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700">
              District
            </label>
            <select
              id="district"
              name="district"
              {...register("district", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 sm:text-sm"
            >
              <option value="" disabled>Select district</option>
              {states
                .find((s) => s.name === selectedState)
                ?.districts.map((district, index) => (
                  <option key={index} value={district}>{district}</option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Enter your pincode"
              {...register("pincode", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              placeholder="Enter your address"
              {...register("address", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="dash-btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
            >
              Save Changes
            </button>
            <button type="button" className="text-white font-bold py-2 px-4 rounded bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <Link href="/" >
                Back to Home
              </Link>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-75vh flex flex-col justify-center items-center">
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
};

export default Dashboard;
