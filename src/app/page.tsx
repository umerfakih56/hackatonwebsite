import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export default function Home() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center py-16 lg:space-x-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-black">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="text-gray-600 mt-6 text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full mt-6 hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>

        <div className="flex-1 relative">
          <Image
            src="/home page.jpeg" // Replace with your actual image path
            alt="Fashion"
            width={600}
            height={600}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-semibold mb-8">NEW ARRIVALS</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example product */}
            <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md">
              <Image
                src="/blacktshirt.png"
                alt="Sleeves Stripped T-shirt"
                width={250}
                height={200}
              />
              <p className="mt-4 font-medium">Sleeves Stripped T-shirt</p>
              
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                {/* Full Stars */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                {}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
               
              </div>
              <p className="text-red-500 font-bold">$120</p>
            </div>

            {}
            <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md">
              <Image
                src="/bluepant.png"
                alt="Skinny Fit Jeans"
                width={250}
                height={200}
              />
              <p className="mt-4 font-medium">Skinny Fit Jeans</p>
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                {}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-gray-100">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-500 line-through">$120</p>
              <p className="text-red-500 font-bold">$100</p>
            </div>

            {}

            <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md">
              <Image
                src="/checkshirt.png"
                alt="Checkered Shirt"
                width={250}
                height={200}
              />
              <p className="mt-4 font-medium">Checkered Shirt</p>
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                {}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-gray-100">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-500 line-through">$120</p>
              <p className="text-red-500 font-bold">$100</p>
            </div>

            <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md">
              <Image
                src="/printedshirt.png"
                alt="Sleeves Stripped T-shirt"
                width={250}
                height={200}
              />
              <p className="mt-4 font-medium">Sleeves Stripped T-shirt</p>
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                {}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-gray-100">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-500 line-through">$120</p>
              <p className="text-red-500 font-bold">$100</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Top Selling Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-semibold mb-8">TOP SELLING</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example for Top Selling Products */}
            <div className="text-center bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/greenshirt.png"
                alt="Faded Skinny Jeans"
                width={250}
                height={200}
              />
              <p className="mt-4 font-medium">Faded Skinny Jeans</p>
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-500 line-through">$240</p>
              <p className="text-red-500 font-bold">$200</p>
            </div>
            {/* Repeat for more products */}
            <div className="text-center bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/orangetshirt.png"
                alt="Faded Skinny Jeans"
                width={250}
                height={200}
              />
              <p className="mt-4 font-medium">Faded Skinny Jeans</p>
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
              </div>
            
              <p className="text-gray-500 line-through">$240</p>
              <p className="text-red-500 font-bold">$200</p>
            </div>

            <div className="text-center bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/blueshorts.png"
                alt="Faded Skinny Jeans"
                width={250}
                height={200}
              />
              <p className="mt-4 font-medium">Faded Skinny Jeans</p>
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5 text-gray-300">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5 text-gray-300">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-500 line-through">$240</p>
              <p className="text-red-500 font-bold">$200</p>
            </div>

            <div className="text-center bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/blackpant.png"
                alt="Faded Skinny Jeans"
                width={250}
                height={200}
              />
              <p className="mt-4 font-medium">Faded Skinny Jeans</p>
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10 15.27l3.447 2.222-1.309-4.036 3.451-2.482h-4.267l-1.322-4.029-1.322 4.029H4.68l3.451 2.482-1.309 4.036L10 15.27z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-500 line-through">$240</p>
              <p className="text-red-500 font-bold">$200</p>

    
            </div>
          </div>
        </div>
      </section>


      <div>
      <section className='bg-[#F0F0F0]'>
  <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-8'>
    {/* Centered Heading */}
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Browse by Dress Style</h2>

    {/* Grid Layout */}
    <div className='grid grid-cols-3 gap-6'>
      {/* 1st Box (Half-width) */}
      <div className='col-span-1 bg-gradient-to-r from-gray-100 to-gray-100 h-64 flex flex-col rounded-lg overflow-hidden'>
        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
          <Image
            src="/glassman.png"
            alt="Casual"

            width={250}
            height={200}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-xl font-medium text-black absolute top-0 left-0 p-4">Casuals</h3>
        </a>
      </div>

      {/* 2nd Box (Double-width) */}
      <div className='col-span-2 bg-gradient-to-r from-gray-100 to-gray-100 h-32 flex flex-col rounded-lg overflow-hidden'>
        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
          <Image
            src="/glassman2.png"
            alt="Formal"
            width={250}
            height={200}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-xl font-medium text-black absolute top-0 left-0 p-4">Formal</h3>
        </a>
      </div>

      {/* 3rd Box (Double-width) */}
      <div className='col-span-2 bg-gradient-to-r from-gray-100 to-gray-100 h-32 flex flex-col rounded-lg overflow-hidden'>
        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-6 pt-40">
          <Image
            src="/girl2.png"
            alt="Party"
            width={250}
            height={200}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-xl font-medium text-black absolute top-0 left-0 p-4">Party</h3>
        </a>
      </div>

      {/* 4th Box (Half-width) */}
      <div className='col-span-1 bg-gradient-to-r from-gray-100 to-gray-100 h-64 flex flex-col rounded-lg overflow-hidden'>
        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
          <Image
            src="/gym.png"
            alt="Gyms"
            width={250}
            height={200}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-xl font-medium text-black absolute top-0 left-0 p-4">Gym</h3>
        </a>
      </div>
    </div>
  </div>
</section>

</div>
<div>

<section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-left">
          What Our Clients Say
        </h2>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex justify-">
      <FaArrowLeft />
      <FaArrowRight className="ml-auto" />
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Client Review 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col mb-4">
              {/* Star Ratings */}
              <div className="flex text-yellow-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
              </div>
              {/* Client Name with Green Circle Tick after it */}
              <div className="flex items-center mb-2">
                <p className="text-lg font-bold text-gray-800">Sarah M.</p>
                {/* Green circle tick after name */}
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center ml-2">
                  <span className="text-xs font-bold">✔</span>
                </div>
              </div>
              {/* Client Comment */}
              <p className="text-gray-600 text-base">
               
                I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
              </p>
            </div>
          </div>

          {/* Client Review 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col mb-4">
              {/* Star Ratings */}
              <div className="flex text-yellow-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
              </div>
              {/* Client Name with Green Circle Tick after it */}
              <div className="flex items-center mb-2">
                <p className="text-lg font-bold text-gray-800">Alex K.</p>
                {/* Green circle tick after name */}
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center ml-2">
                  <span className="text-xs font-bold">✔</span>
                </div>
              </div>
              {/* Client Comment */}
              <p className="text-gray-600 text-base">
                
                Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.
              </p>
            </div>
          </div>

          {/* Client Review 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col mb-4">
              {/* Star Ratings */}
              <div className="flex text-yellow-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 .587l3.668 7.431L23.268 9.6l-6 5.85L18.334 23 12 19.569 5.666 23 7.732 15.45 1.268 9.6 8.332 8.018z"/></svg>
              </div>
              {/* Client Name with Green Circle Tick after it */}
              <div className="flex items-center mb-2">
                <p className="text-lg font-bold text-gray-800">James L.</p>
                {/* Green circle tick after name */}
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center ml-2">
                  <span className="text-xs font-bold">✔</span>
                </div>
              </div>
              {/* Client Comment */}
              <p className="text-gray-600 text-base">
              
Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  




  
</div>
    </div>
  );
}
