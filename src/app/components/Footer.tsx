import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="py-6 bg-white text-black text-sm">
      {/* Banner Section */}
      <div className="bg-black text-white py-12 rounded-lg px-6 md:px-10 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side Text */}
          <div className="text-left md:w-1/2">
            <h3 className="font-bold text-4xl uppercase">
              Stay Up to Date About
            </h3>
            <h3 className="font-bold text-4xl uppercase">Our Latest Offers</h3>
          </div>

          {/* Right Side Inputs */}
          <div className="flex flex-col space-y-4 md:w-1/2">
            <div className="bg-white p-3 rounded-xl w-full">
              <input
                type="text"
                placeholder="Enter your email address here"
                className="text-black w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 p-2 rounded-md"
              />
            </div>
            <div className="bg-white p-3 rounded-xl w-full">
              <input
                type="text"
                placeholder="Subscribe to newsletter"
                className="text-black w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 p-2 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Section */}
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        <div className="md:col-span-2">
          <h1 className="font-bold text-lg mb-4">
            <b>SHOP.CO</b>
          </h1>
          <p className="mb-4 text-gray-400">
            We have clothes that suit your style and make you proud to wear them. From women to men.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/fb1.png"
                alt="Facebook"
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/tw1.png"
                alt="Twitter"
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/insta1.png"
                alt="Instagram"
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkdin2.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul>
            <li className="mb-2 text-gray-400">About</li>
            <li className="mb-2 text-gray-400">Features</li>
            <li className="mb-2 text-gray-400">Works</li>
            <li className="mb-2 text-gray-400">Career</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Help</h3>
          <ul>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Customer Support</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Delivery Details</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Terms and Conditions</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">FAQ</h3>
          <ul>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Account</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Manage Delivery</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Orders</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Payments</a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Free eBook</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">Development Tutorial</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">How-to Blog</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline">
              <a href="#">YouTube Playlist</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-700 pt-6 mt-6 text-gray-500">
        &copy; Shop.co 2000-2023, All Rights Reserved
        <div className="flex justify-center space-x-4 mt-4">
          <Image src="/visa.png" alt="Visa" width={40} height={32} />
          <Image src="/mastercard.png" alt="MasterCard" width={40} height={32} />
          <Image src="/paypal.png" alt="PayPal" width={40} height={32} />
          <Image src="/applepay.png" alt="Apple Pay" width={40} height={32} />
          <Image src="/gpay.png" alt="Google Pay" width={40} height={32} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

