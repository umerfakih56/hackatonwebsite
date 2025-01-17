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
              src="https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U55a9SsM4jAeTi7knSrwXyzS6VJLfCRvLCqHrW4vQgfl8ADjq4IKjDdhQXYWrvfyutmPrZ5uhJP1EOqOK3Al5eTS2ev7fKvNcREm-hSsYsyMKpIqNhC7Gh9dU-iDx-3nFEPT-U9vJ4axaTmYJrrLKqY4aqm5sn88pCWWMFPaDFLPaRvaeAZioVSurb~g13BgRQ8wOkrVUDpL4ruW3oOxU-PaZptLHNzul6liH5wYc2VAEsgztjCvSxfApdIC16W472zRl1EdQJ8UCFxHqIxvmWuHkV8xgXKz17DA5av20~5jwKOHzLjzeYvcecPgFuOkDEt4vftnBFMWaZczR~hxEQ__"
              alt="Thumb 1"
              height={200}
            width={250}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <Image
              src="https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDa9o5554OddWri01ujq6gmjJLmpc7xd~ya2G4JGzzTUWXe9gwZdsy0L9ToEQ0Vb02LeLyR0xv35mb8cDuk~S79BvRtHgcxt6ixS4mgr~kRXbz9NXH36t82zMI5Ike0Wx1WsIbMpK3VZu61nVjLd0BAgv0LcWp11yHyOi0UTQFoZbe59~D~z-ahb0byjaKh-vQ4im6IMkWen-C1xetTy5RXel1z8EaO1WnANFu8udzfil-kzjJChz3fVMt7eYqpeGlYpz7jGBrKqhEBbb44YqIYNlC45EsCfh4ANEO9JSCJzT~EKqA-IbDLLc3w65vPIhKUaqlvESRUInDdeCkwbmQ__"
              alt="Thumb 2"
              height={200}
            width={250}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <Image
              src="https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckKaSkKks9mwOaQxvVIZvBlC5v-Kl88MGxxVDkM3oSEwEIMejv1r86g6iSMJlZN3aigc6u~fC7Mpdc92VB1fuQL9uaGuCgLUxHSG-xpokQtha4B4YHG8o2TFwVIt9HXwei4l02DzPVpm9s-9RGrsurra8E8L9-NU9oS0S81Vu6ORun4sbWasattGZxjDXqfVPBA5y-UJloe7p8ee7xuXadkTuctx64fBYOoDnrByvUSL1Ab2g20eTflLLmHp8I4kAVf1-FSkNlOXtuyqmduAumfIhTJtOzmGdWkPg7f7AK5RU5kN9jkMUjTG~TX5IQ~r3b02KvgydtIyOvMiFyKv7g__"
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
            src="https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U55a9SsM4jAeTi7knSrwXyzS6VJLfCRvLCqHrW4vQgfl8ADjq4IKjDdhQXYWrvfyutmPrZ5uhJP1EOqOK3Al5eTS2ev7fKvNcREm-hSsYsyMKpIqNhC7Gh9dU-iDx-3nFEPT-U9vJ4axaTmYJrrLKqY4aqm5sn88pCWWMFPaDFLPaRvaeAZioVSurb~g13BgRQ8wOkrVUDpL4ruW3oOxU-PaZptLHNzul6liH5wYc2VAEsgztjCvSxfApdIC16W472zRl1EdQJ8UCFxHqIxvmWuHkV8xgXKz17DA5av20~5jwKOHzLjzeYvcecPgFuOkDEt4vftnBFMWaZczR~hxEQ__"
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
                
              <div className="w-6 h-6 rounded-full bg-red-500 border"></div>
              <div className="w-6 h-6 rounded-full bg-blue-900 border"></div>
              <div className="w-6 h-6 rounded-full bg-green-500 border"></div>
            </div>
          </div>

          {/* Size Selection */}
          <div className="flex items-center gap-4 mt-4">
            <span className="font-bold">Choose Size:</span>
            <div className="flex gap-2">
              <div className="px-4 py-1 border rounded-full">S</div>
              <div className="px-4 py-1 border rounded-full">M</div>
              <div className="px-4 py-1 border rounded-full">L</div>
              <div className="px-4 py-1 border rounded-full">XL</div>
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
            src="https://s3-alpha-sig.figma.com/img/15e6/8c10/3095df99e905b164718348af952a0f64?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TIz58LQQhWPyW0TFPoKVK7IuZzVhfdjFxtVTbBYr8s4w5pZQSY-EJUg6I1qrH1Vet83nyn0e~XFlTbfbDK8COvKRfKLRs6fVMVHXmj0XGSVr0sblBA8AoWivTxRxGFKnRwUDtBSIUtKToV4L~QVIIN04j2zvQ9BOg2G7sa6Jry7XQh-J1s2d96vUfNDyej7dTIn3pVKeQdWwB1vX28r48aCXndb7kuFEjVRGFM-dNQ3KAV1DIOqoypBFQF-XCvuZbLMKNDY4imSOjFKiywvnESUYlpJs1C9~wvZlPKH0VEL3B5-sPLEN5U6ZzCI7cX7gvElfCYCoqIEj~SKGe06E3w__"
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
            src="https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PSOf80O0OAl~aCjSHB8hlfVqi3H0ogHkUnBvgKwzj6bY3uTyabVyWwssDV1wqkxJ~PbCWFgbipBw-KGPIEqRXL4sxx3U2xiHtZVubaNOREH7LITI0ispmDYOjm19H9oIp3hyeg~45XCRdLNTR9N8XRG7rrIXi6jj81zo-Kag-Js3O5qJbvnW7LxvP2rtph39J0DW6t7c-m5zus8GEPD8lFJbhZUJx28AkTXjYNkF0CBljrPa5okL9o7XnYCH~mh42vEbLlmbHhUYmWS9WZL1mNDgDYLSmirrO~WfDcOlfyHtOVaTkyWeBAo-BcQxMVzO193~707cRh01vAwJNcdlbg__"
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
            src="https://s3-alpha-sig.figma.com/img/aecd/8196/485b30fd30b3226e09bb8f8e494c260b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AFJm51loUsz8gm~uuxfk7-Q3zb8d8dlWDhzP2bMxBrY1YRPj3ohsVz6Wokv9kUBVw7kIj7-wjGYqHYIEOBHGN05SBzUow9Hgzp8KWXAz9Xb6FvHM3TxWPUR-6RheZOTJRqugIABFUMrcPAY7b9pWXSoaz9nLJYHK~ZmBQOjFxI7HyjR5kbplZuxZFMOs9eVQrzeegtIfeso5PmqcAtCirjjrNcBjjZYO0STA4Kb79xSdRpTxSgpIsfS6PMiDnGeUtL5MxiULXP5EV40eS~0eVN2xjqMR7dIn3TO6yy~VZuB3oUc-QglGg8mAKn4S~enx5Wt-l5SQJ9AbFNUZx6Hyuw__"
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
            src="https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KbBuslGdomfflzSvB4a0KlQ4cpoAjE34svl9mLiRQghoIBnd1qq5fkRxS3kw-I~3Rto0KbxWzn8VI0iZpgCKV6nSXwNvxkse3HPjPfTeHIHGpbdtyTEWEBwy7xnKr5mLZaHwRHBGu0NjrxWZNbpInsapwnEjkxYMwRMb370QUUqNQY9kFI7qWVNI3hZV-OZdwFqJ39w5M30E6o1s9Z5KLei~THjYWDcHp8IQ8bq6L3634Q5pxEVC~VKVmyz4rEB7s3OtGVt3tqkkm-NOYeokwIIb2oVJX4TF5ye-kzbnmxYpai~~kRVazRyNwFUqc3-r9MYl59iZRN39H0e~RzRogw__"
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
