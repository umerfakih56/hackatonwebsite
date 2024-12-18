
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="py-6 bg-white text-black text-sm">
      {/* Banner Section */}
      <div className="bg-black text-white py-12 rounded-lg px-6 md:px-10 mb-4">
        <div className="flex justify-between items-center">
          {/* Left Side Text */}
          <div className="text-left w-1/2">
            <h3 className="font-bold text-4xl uppercase">STAY UP TO DATE ABOUT </h3>
            <h3 className="font-bold text-4xl uppercase">OUR LATEST OFFERS </h3>
          </div>

          {/* Right Side Placeholders */}
          <div className="flex flex-col space-y-4 w-1/2 justify-end rounded-lg">
            <div className="bg-white p-3 rounded-xl w-full flex items-center justify-center ">
              <input
                type="text"
                placeholder="Enter your email adress here"
                
                className="text-black w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 p-2 rounded-md"
              />
            </div>
            <div className="bg-white p-3 rounded-xl w-full flex items-center justify-center ">
              <input
                type="text"
                placeholder="Subscribe to newspaper"
                className="text-black w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 p-2 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Section */}
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
      <div className="md:col-span-2">
          <h1 className="font-bold text-lg mb-4 text-bold"><b>SHOP.CO</b></h1>
          <p className="mb-2 text-gray-400">
          We have clothes that suits your style
          <p> and which you are proud to</p>
           wear. From women to men.</p>
           
          {/* Social Media Icons Section */}
          <div className="flex space-x-2 md:w-1/3 justify-center md:justify-end ">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="fb1.png"
                alt="Facebook"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="tw1.png"
                alt="Twitter"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="insta1.png"
                alt="Instagram"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="linkdin2.png"
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            </div>
    
        </div>

        {/* Company Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <p className="mb-2 text-gray-400">About</p>
          <p className="mb-2 text-gray-400">Features</p>
          <p className="mb-2 text-gray-400">Works</p>
          <p className="mb-2 text-gray-400">Career</p>
        
        </div>

        {/* Help Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg mb-4">Help</h3>
          <ul>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Customer Support
              </a>
            </li>
            <br/>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Delivery Details
              </a>
            </li>
            <br/>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Terms and Condition
              </a>
            </li>
            <br/>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
           
          </ul>
        </div>

        {/* FAQ*/}
        <div>
          <h3 className="font-bold text-lg mb-4">FAQ</h3>
          <ul>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                 Account
              </a>
              <br/>
            </li>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Manage Delivery  
              </a>
              <br/>
            </li>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Orders
              </a>
              <br/>
            </li>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Payments
              </a>
            </li>
           
          </ul>
        </div>

        {/* RESOURCES*/}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg mb-4">RESOURCES</h3>
          <ul>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Free eBook
              </a>
            </li>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Development Tutorial
              </a>
            </li>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                How to -Blog
              </a>
            </li>
            <li className="mb-2 text-gray-400">
              <a href="#" className="hover:underline">
                Youtube Playlist
              </a>
            </li>
          </ul>
        </div>

 </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-700 pt-6 mt-6 text-gray-500">
        &copy;Shop.co © 2000-2023, All Rights Reserved
        <div className="flex justify-center space-x-4 mt-4">
          <img src="visa.png" alt="Visa" className="w-10 h-8" />
          <img src="mastercard.png" alt="MasterCard" className="w-10 h-8" />
          <img src="paypal.png" alt="PayPal" className="w-10 h-8" />
          <img src="applepay.png" alt="Apple Pay" className="w-10 h-8" />
          <img src="gpay.png" alt="Google Pay" className="w-10 h-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
