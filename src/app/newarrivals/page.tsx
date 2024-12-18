'use client'; // Marks the file as a client component

import React from "react";
import Image from "next/image";

const HomePage = () => {
  const products = [
    { image: "/white.png", name: "Gradient Graphic T-Shirt", price: "145$" },
    { image: "/pink.png", name: "Polo with Tipping Details", price: "180$" },
    { image: "/black.png", name: "Black Stripped T-shirt", price: "120$" },
    { image: "/bluepant.png", name: "Skinny Fit Jeans", price: "240$" },
    { image: "/checkshirt.png", name: "Checkered Shirt", price: "180$" },
    { image: "/printedshirt.png", name: "Sleeves Stripped T-Shirt", price: "$130" },
    { image: "/greenshirt.png", name: "Vertical Stripped Shirt", price: "$212" },
    { image: "/orangetshirt.png", name: "Courage Graphic T-shirt", price: "$145" },
    { image: "/blueshorts.png", name: "Loose Fit Bermuda Shorts", price: "$80" },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-100 p-4">
        {/* Filters Section */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Filters</h3>
        <ul className="space-y-2">
          <li>T-Shirts</li>
          <li>Shorts</li>
          <li>Shirts</li>
          <li>Hoodies</li>
          <li>Jeans</li>
        </ul>

        {/* Price Range */}
        <h4 className="font-semibold text-lg text-gray-700 mb-2 mt-4">Price</h4>
        <input type="range" min="50" max="200" className="w-full mb-4" />

        {/* Colors */}
        <h4 className="font-semibold text-lg text-gray-700 mb-2">Colors</h4>
        <div className="flex flex-wrap w-full">
          {["red-500", "blue-500", "green-500", "yellow-500", "indigo-500"].map(
            (color, i) => (
              <div
                key={i}
                className={`w-6 h-6 bg-${color} rounded-full mr-2 mb-2`}
              ></div>
            )
          )}
        </div>

        {/* Sizes */}
        <h4 className="font-semibold text-lg text-gray-700 mb-2">Size</h4>
        <div className="flex flex-wrap space-x-2 mb-4">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <div
              key={size}
              className="border px-3 py-1 rounded-lg text-center mb-2"
            >
              {size}
            </div>
          ))}
        </div>

        {/* Apply Filters Button */}
        <button className="w-full py-2 bg-black text-white rounded-full">
          Apply Filters
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-white p-4">
        {/* Products Section */}
        <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
          Casual
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg mx-auto"
              />
              <h3 className="mt-4 font-medium">{product.name}</h3>
              <p className="text-red-500 font-bold">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-4 md:space-y-0">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
            disabled
          >
            ← Previous
          </button>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-800 rounded font-semibold">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 text-gray-600 rounded">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 text-gray-600 rounded">
              3
            </button>
            <span className="text-gray-600">...</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 text-gray-600 rounded">
              8
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 text-gray-600 rounded">
              9
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 text-gray-600 rounded">
              10
            </button>
          </div>
          <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
