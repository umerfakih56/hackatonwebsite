import Head from 'next/head';
import Image from 'next/image';
import { CiTwitter, CiLinkedin } from 'react-icons/ci'; // Import the required icons
import { FaInstagram } from 'react-icons/fa'; // Import the required icons
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Head Section */}
      <Head>
        <title>Our Story</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <main className="flex flex-col gap-8">
        {/* Our Story Section */}
        <h1 className="text-4xl font-bold text-left">Our Story</h1>
        <div className="flex gap-8 items-center">
          <div className="w-1/2">
            <p className="text-lg text-gray-700">
             
            </p>
            <p className="text-lg text-gray-700 mt-4">
            Exclusive was launched in 2015 and is South Asia premier online shopping marketplace, with a strong presence in Bangladesh. Offering a comprehensive suite of tailored marketing, data, and service solutions, Exclusive connects over 10,500 sellers and 300 brands with 3 million customers across the region.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/girls.jpeg"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </main>

      {/* Four Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/icon1.png"
            alt="Icon 1"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Fast Delivery</h3>
          <p className="text-gray-600 mt-2">Get your products quickly and efficiently.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/icon2.png"
            alt="Icon 2"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Secure Payment</h3>
          <p className="text-gray-600 mt-2">Enjoy safe and reliable payment options.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/icon3.png"
            alt="Icon 3"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">24/7 Support</h3>
          <p className="text-gray-600 mt-2">We are here to help anytime, anywhere.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/icon4.png"
            alt="Icon 4"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Diverse Products</h3>
          <p className="text-gray-600 mt-2">Choose from a wide range of categories.</p>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-12">
        <h2 className="text-4xl font-bold text-left mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 
            { name: 'Tom Cruise', role: 'Founder & Chairman', img: 'https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3' },
            { name: 'Emma Watson', role: 'Managing Director', img: 'https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7' },
            { name: 'Will Smith', role: 'Product Designer', img: 'https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8' }
          ].map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: "150px", height: "350px", margin: "auto" }}>
              <div className="relative" style={{ height: "300px", overflow: "hidden" }}>
                <Image
                  src={member.img}
                  alt={member.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="mt-4 flex justify-center gap-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <CiTwitter size={24} />
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <CiLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

