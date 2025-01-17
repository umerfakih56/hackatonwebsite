'use client';

import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      {/* Top banner */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <div className="flex-1 text-center">
          Sign up and get 20% off your first order.
          <button className="text-white hover:underline ml-2">Sign Up Now</button>
        </div>
        <button
          className="bg-red-400 text-white hover:bg-red-600 p-2 rounded-full md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white text-black border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <div className="text-2xl font-bold">SHOP.CO</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <div className={`flex space-x-6 text-sm font-medium md:flex md:space-x-6 ${isMenuOpen ? "block" : "hidden"} md:block`}>
            <div className="relative group">
              <button className="hover:text-gray-700 flex items-center space-x-1">
                <span>Shop</span>
                <span className="transform group-hover:rotate-180">▼</span>
              </button>
              {/* Dropdown */}
              <div className="hidden group-hover:block absolute bg-white text-black mt-2 p-2 shadow rounded">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</a>
              </div>
            </div>
            <a href="/onsale" className="hover:text-gray-700">On Sale</a>
            <a href="/newarrivals" className="hover:text-gray-700">New Arrivals</a>
           
            <a href="#" className="hover:text-gray-700">Brands</a>
            
           
          </div>
          

          {/* Search & Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative w-80 hidden md:block">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <CiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full bg-gray-100 text-sm pl-10 py-2 rounded-full border focus:outline-none focus:ring focus:ring-gray-300"
                placeholder="Search for products..."
              />
            </div>
            <button>
              <CiShoppingCart size={24} />
            </button>
            <button>
              <FaRegUserCircle size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} w-full px-4 py-2`}>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <CiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full bg-gray-100 text-sm pl-10 py-2 rounded-full border focus:outline-none focus:ring focus:ring-gray-300"
            placeholder="Search for products..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
