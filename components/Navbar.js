"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faInfoCircle,
  faSignOutAlt,
  faClipboardList,
  faBoxOpen,
  faShoppingCart,
  faCog,
  faShoppingBag,
  faSeedling,
  faInfo,
  faShieldAlt,
  faUser,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    // <nav className="bg-gradient-to-r from-teal-200 to-lime-200 py-2 pt-4 text-white fixed top-0 left-0 w-full z-20 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 "></nav>
    <nav className=" py-2 pt-4 text-white fixed top-0 left-0 w-full z-20 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      <div className="flex flex-row items-center justify-between px-8">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-green-700">
            <Link href="/">FarmToTable</Link>
          </h1>
          <p className="mt-2 text-md text-green-700">
            Promoting sustainable agriculture and local farming.
          </p>
        </div>
        <div className="flex space-x-6 text-lg items-center">
          <Link href="/" className="nav-btns px-2">
            <FontAwesomeIcon className="text-3xl" icon={faHome} />
          </Link>
          <div className="relative group">
            <button className="nav-btns focus:outline-none px-2">
              <FontAwesomeIcon className="text-3xl" icon={faBars} />
            </button>
            <div className="dropdown-menu absolute right-0 w-56 p-1 bg-white bg-opacity-90 text-black text-2xl rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible backdrop-filter backdrop-blur-lg">
              <Link
                href="/buy"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon
                  className="mr-2 text-2xl"
                  icon={faShoppingBag}
                />{" "}
                Buy
              </Link>
              <Link
                href="/sell"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon icon={faSeedling} className="mr-2 text-2xl" />{" "}
                Sell
              </Link>
              <Link
                href="/info"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon icon={faInfo} className="mr-2 text-2xl" /> Info
              </Link>
              <Link
                href="/crop_safety"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon icon={faShieldAlt} className="mr-2 text-2xl" />{" "}
                Crop Safety
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="nav-btns focus:outline-none px-2">
              <FontAwesomeIcon className="text-3xl" icon={faUser} />
            </button>
            <div className="dropdown-menu absolute right-0 w-72 p-1 bg-white bg-opacity-90 text-black text-2xl rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible backdrop-filter backdrop-blur-lg">
              <Link
                href="/myproducts"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon icon={faBoxOpen} className="mr-2 text-2xl" />{" "}
                My Products
              </Link>
              <Link
                href="/orders-received"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="mr-2 text-2xl"
                />{" "}
                Orders-Received
              </Link>
              <Link
                href="/orders-placed"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="mr-2 text-2xl"
                />{" "}
                Orders-Placed
              </Link>
              <Link
                href="/cart"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="mr-2 text-2xl"
                />{" "}
                Cart
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="nav-btns focus:outline-none px-2">
              <FontAwesomeIcon className="text-3xl" icon={faCog} />
            </button>
            <div className="dropdown-menu absolute right-0 w-56 p-1 bg-white bg-opacity-90 text-black text-2xl rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible backdrop-filter backdrop-blur-lg">
              <Link
                href="/dashboard"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  className="mr-2 text-2xl"
                />{" "}
                Dashboard
              </Link>
              <Link
                href="/about"
                className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
              >
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="mr-2 text-2xl"
                />{" "}
                About
              </Link>
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="block nav-dp-btns w-full text-left px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="mr-2 text-2xl"
                  />{" "}
                  Log Out
                </button>
              ) : (
                <Link
                  href="/login"
                  className="block nav-dp-btns px-4 py-2 text-gray-800  hover:shadow-xl hover:text-white rounded-md"
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="mr-2 text-xl"
                  />{" "}
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
