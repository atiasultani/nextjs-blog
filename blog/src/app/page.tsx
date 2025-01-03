import React from 'react'
import Image from 'next/image'
const Page = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-black flex justify-center items-center">
        <Image
          src="/main.jpg"
          alt="image"
          fill
          className="object-cover"
        />
      </div>

      {/* Button Section */}
      <div
        className="
          flex 
          justify-center 
          mt-6
          md:mt-10 
        "
      >
        <button
          className="
            outline 
            outline-white 
            px-8 
            md:px-12 
            py-2 
            md:py-3 
            rounded-full 
            text-white 
            bg-black 
            hover:bg-slate-400
            hover:text-black 
            transition
          "
        >
          <a href="/home">Click Here To Read Blogs</a>
        </button>
      </div>
    </div>
  );
};

export default Page;

