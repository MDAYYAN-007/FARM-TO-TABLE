"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="min-h-75vh flex flex-col justify-center items-center space-y-4">
          <div className="text-xl font-semibold">
            Signed in as {session.user.email}
          </div>
          <div className="flex gap-4">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2">
              <Link href="/" >
                Back to Home
              </Link>
            </button>
            <button
              onClick={() => signOut()}
              type="button"
              className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2"
            >
              Sign out
            </button>
          </div>
          {session.user.isProfileComplete ? (
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2">
              <Link href="/dashboard">
                Edit Profile
              </Link>
            </button>
          ) : (
            <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <Link href="/dashboard">
                Complete Profile
              </Link>
            </button>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-75vh flex justify-center items-center">
        <button className="flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-lg font-medium dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={() => signIn("google")}>
          <img
            src="/images/googleicon.png"
            alt="Google Icon"
            className="h-8 w-8 mr-2"
          />
          <span>Continue with Google</span>
        </button>
      </div>
    </>
  );
}
