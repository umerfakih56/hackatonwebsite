import React from "react";
import Image from "next/image";
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-yellow-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.338 4.11a1 1 0 00.95.69h4.317c.969 0 1.371 1.24.588 1.81l-3.49 2.536a1 1 0 00-.364 1.118l1.338 4.11c.3.921-.755 1.688-1.54 1.118l-3.49-2.536a1 1 0 00-1.176 0l-3.49 2.536c-.784.57-1.839-.197-1.54-1.118l1.338-4.11a1 1 0 00-.364-1.118L2.174 9.537c-.783-.57-.381-1.81.588-1.81h4.317a1 1 0 00.95-.69l1.338-4.11z" />
  </svg>
);

const ProductPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <div className="flex flex-col gap-2">
            <Image
              src="/front.png"
              alt="Thumb 1"
              height={200}
            width={250}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <Image
              src="/front2.png"
              alt="Thumb 2"
              height={200}
            width={250}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <Image
              src="/front3.png"
              alt="Thumb 3"
              height={200}
            width={250}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Main Product Image and Details */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <Image
            src="/front.png"
            alt="Main Product"
            height={200}
            width={250}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold font-serif">One Life Graphic T-Shirt</h1>
            <div className="flex items-center gap-2 mt-2">
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} />
              ))}
              <StarIcon />
              <span className="text-sm">(5/5)</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-3xl font-bold text-black">$260</span>
              <span className="line-through text-gray-400">$300</span>
            </div>
            <p className="text-gray-500 mt-2">
              This graphic t-shirt is perfect for any occasion. Crafted from soft and
              breathable fabric, it offers superior comfort and style.
            </p>
          </div>

          {/* Color Selection */}
          <div className="flex items-center gap-4 mt-4">
            <span className="font-bold">Select Color:</span>
            <br/>
            <div className="flex gap-2">
                
              <div className="w-6 h-6 rounded-full bg-green-800 border"></div>
              <div className="w-6 h-6 rounded-full bg-blue-600 border"></div>
              <div className="w-6 h-6 rounded-full bg-blue-900 border"></div>
            </div>
          </div>

          {/* Size Selection */}
          <div className="flex items-center gap-4 mt-4">
            <span className="font-bold">Choose Size:</span>
            <div className="flex gap-2">
              <div className="px-4 py-1 border rounded-full">Small</div>
              <div className="px-4 py-1 border rounded-full">Medium</div>
              <div className="px-4 py-1 border rounded-full border-black">Large</div>
              <div className="px-4 py-1 border rounded-full">X-Large</div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-black text-white px-6 py-2 rounded-lg mt-6">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">All Reviews (451)</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-200">
              Latest
            </button>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-200">
              Write a Review
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
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
                <p className="text-lg font-bold text-gray-800">Samantha D.</p>
                {/* Green circle tick after name */}
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center ml-2">
                  <span className="text-xs font-bold">✔</span>
                </div>
              </div>
              {/* Client Comment */}
              <p className="text-gray-600 text-base">
               
              I absolutely love this tshirt The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite goto shirt.
              </p>
              <br/>
              <p>Posted on August 15, 2023</p>
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
                <p className="text-lg font-bold text-gray-800">Alex M.</p>
                {/* Green circle tick after name */}
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center ml-2">
                  <span className="text-xs font-bold">✔</span>
                </div>
              </div>
              {/* Client Comment */}
              <p className="text-gray-600 text-base">
               
              The tshirt exceeded my expectations The colors are vibrant and the print quality is top notch. Being a UI UX designer myself, I am quite picky about aesthetics and this tshirt definitely gets a thumbs up from me.
              
              </p>
              <br/>
              <p>Posted on August 15, 2023</p>
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
                <p className="text-lg font-bold text-gray-800">Ethan R.</p>
                {/* Green circle tick after name */}
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center ml-2">
                  <span className="text-xs font-bold">✔</span>
                </div>
              </div>
              {/* Client Comment */}
              <p className="text-gray-600 text-base">
               
              
This tshirt is a must have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designers touch in every aspect of this shirt.

              </p>
              <br/>
              <p>Posted on August 16, 2023</p>
            </div>
          </div>


             {/* Client Review 4 */}
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
                <p className="text-lg font-bold text-gray-800">Olivia P.</p>
                {/* Green circle tick after name */}
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center ml-2">
                  <span className="text-xs font-bold">✔</span>
                </div>
              </div>
              {/* Client Comment */}
              <p className="text-gray-600 text-base">
              
As a UI/UX enthusiast, I value simplicity and functionality. This tshirt not only represents those principles but also feels great to wear. Its evident that the designer poured their creativity into making this tshirt stand out.
               
              </p>
              <br/>
              <p>Posted on August 17, 2023</p>
            </div>
          </div>


             {/* Client Review 5 */}
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
                <p className="text-lg font-bold text-gray-800">Liam K.</p>
                {/* Green circle tick after name */}
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center ml-2">
                  <span className="text-xs font-bold">✔</span>
                </div>
              </div>
              {/* Client Comment */}
              <p className="text-gray-600 text-base">
               
              This tshirt is a fusion of comfort and creativity. The fabric is soft and the design speaks volumes about the designers skill. Its like wearing a piece of art that reflects my passion for both design and fashion.
              </p>
              <br/>
              <p>Posted on August 18, 2023</p>
            </div>
          </div>


             {/* Client Review 6 */}
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
                <p className="text-lg font-bold text-gray-800">AVA H.</p>
                {/* Green circle tick after name */}
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center ml-2">
                  <span className="text-xs font-bold">✔</span>
                </div>
              </div>
              {/* Client Comment */}
              <p className="text-gray-600 text-base">

              I am not just wearing a tshirt, I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.
              </p>
              <br/>
              <p>Posted on August 19, 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="max-w-screen-lg mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="border p-4 rounded-lg shadow-lg">
          <Image
            src="/blue23.png"
            alt="Polo with Contrast Trims"
            height={200}
            width={250}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Polo with Contrast Trims</h3>
          <div className="flex items-center gap-2 mb-2">
            {[...Array(4)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <StarIcon />
            <span className="text-sm">(5)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-black">$212</span>
            <span className="line-through text-gray-400">$242</span>
            <span className="text-red-500 text-sm">-20%</span>
          </div>
        </div>
        
        {/* Product 2 */}
        <div className="border p-4 rounded-lg shadow-lg">
          <Image
            src="/white.png"
            alt="Gradient Graphic T-Shirt"
            height={200}
            width={250}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Gradient Graphic T-Shirt</h3>
          <div className="flex items-center gap-2 mb-2">
            {[...Array(3)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <StarIcon />
            <span className="text-sm">(4)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-black">$145</span>
          </div>
        </div>
        
        {/* Product 3 */}
        <div className="border p-4 rounded-lg shadow-lg">
          <Image
            src="/pink.png"
            alt="Polo with Tipping Details"
            height={200}
            width={250}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Polo with Tipping Details</h3>
          <div className="flex items-center gap-2 mb-2">
            {[...Array(4)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <StarIcon />
            <span className="text-sm">(5)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-black">$180</span>
          </div>
        </div>
        
        {/* Product 4 */}
        <div className="border p-4 rounded-lg shadow-lg">
          <Image
            src="/black.png"
            alt="Black Striped T-Shirt"
            height={200}
            width={250}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Black Striped T-Shirt</h3>
          <div className="flex items-center gap-2 mb-2">
            {[...Array(3)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <StarIcon />
            <span className="text-sm">(4)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-black">$120</span>
            <span className="line-through text-gray-400">$160</span>
            <span className="text-red-500 text-sm">-30%</span>
          </div>
        </div>
      </div>
    </div>
 


      </div>
    </div>
  );
};

export default ProductPage;
