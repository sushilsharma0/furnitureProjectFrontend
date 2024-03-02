"use client";
import React, { useState, useEffect } from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { TextInput } from "flowbite-react";
const cookies = new Cookies();

export default function Navbar() {
  const [searchText, setSearchText] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.get("USER-TOKEN"));
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!cookies.get("USER-TOKEN"));
  }, [cookies.get("USER-TOKEN")]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    cookies.remove("USER-TOKEN", {
      path: "/",
    });
    setIsLoggedIn(false);
    localStorage.removeItem("userId");
  };

  const handleCartMessage = () => {
    navigate("/signin");
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchText}`);
    }
  });

  const handleSearch = () => {
    navigate(`/search/${searchText}`);
  };

  return (
    <div className="relative w-full bg-slate-300">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-2xl">Furniture</span>
          {isLoggedIn ? (
            <Link to="/cart">
              <ShoppingCart />
            </Link>
          ) : (
            <span onClick={handleCartMessage} className="cursor-pointer">
              <ShoppingCart />
            </span>
          )}
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8 items-center">
            <li className="flex items-center gap-2">
              <TextInput
                placeholder="search.."
                type="search"
                onChange={(e) => setSearchText(e.target.value)}
              ></TextInput>
              <Search onClick={handleSearch} className="cursor-pointer" />
            </li>
            <li>
              <Link
                to="/"
                className="text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className="text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                All Products
              </Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          // Show logout button if user is logged in
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        ) : (
          // Show signin and signup links if user is not logged in
          <div className="hidden lg:block">
            <Link
              to="/signin"
              type="button"
              className="rounded-md mr-2 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign Up
            </Link>
          </div>
        )}
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">Furniture</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <Link
                      to="/"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Home
                      </span>
                    </Link>
                  </nav>
                </div>
                {isLoggedIn ? (
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black my-1"
                    onClick={handleLogout}
                  >
                    logout
                  </button>
                ) : (
                  <>
                    <Link
                      to="/signin"
                      type="button"
                      className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black my-1"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      type="button"
                      className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
