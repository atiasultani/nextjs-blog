import React from 'react'
import Image from 'next/image'
import Link from 'next/link';




const Home =() => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      
      {/* Card Container */}
     <Link href='/home/blog1 '>
      <div
        className="
          max-w-sm 
          md:max-w-md 
          lg:max-w-lg 
          w-full 
          bg-white 
          rounded-lg 
          shadow-lg 
          overflow-hidden 
          flex flex-col 
          items-center 
          hover:scale-105 
          hover:shadow-2xl 
          transition 
          duration-300
          gap-x-7
          ml-20
              "
      >
        {/* Image */}
        <div className="w-full">
          <Image
            src="/first.jpg"
            alt="image1"
            width={300}
            height={100}
            className="w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="p-6 text-center">
          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Tempora nisi vitae impedit sit fugit, aspernatur corrupti minus unde
            adipisci cum <br />
            rem suscipit qui accusantium quisquam laboriosam deleniti, <br />
            ut veritatis facere!
          </p>
        </div>
      </div>
      </Link>

      {/* Card Container2 */}
      <Link href='/home/blog2'>
      <div
        className="
          max-w-sm 
          md:max-w-md 
          lg:max-w-lg 
          w-full 
          bg-white 
          rounded-lg 
          shadow-lg 
          overflow-hidden 
          flex flex-col 
          items-center 
          hover:scale-105 
          hover:shadow-2xl 
          transition 
          duration-300
          gap-x-7
          mx-10
          "
      >
        {/* Image */}
        <div className="w-full">
          <Image
            src="/second.jpg"
            alt="image1"
            width={300}
            height={100}
            className="w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="p-6 text-center">
          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Tempora nisi vitae impedit sit fugit, aspernatur corrupti minus unde
            adipisci cum <br />
            rem suscipit qui accusantium quisquam laboriosam deleniti, <br />
            ut veritatis facere!
          </p>
        </div>
      </div>
      </Link>


 {/* Card Container3 */}
 <a href='/home/blog3' >
      <div
        className="
          max-w-sm 
          md:max-w-md 
          lg:max-w-lg 
          w-full 
          bg-white 
          rounded-lg 
          shadow-lg 
          overflow-hidden 
          flex flex-col 
          items-center 
          hover:scale-105 
          hover:shadow-2xl 
          transition 
          duration-300
          gap-x-7
          
          "
      >
        {/* Image */}
        <div className="w-full">
          <Image
            src="/third.jpg"
            alt="image1"
            width={300}
            height={100}
            className="w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="p-6 text-center">
          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Tempora nisi vitae impedit sit fugit, aspernatur corrupti minus unde
            adipisci cum <br />
            rem suscipit qui accusantium quisquam laboriosam deleniti, <br />
            ut veritatis facere!
          </p>
        </div>
      </div>
      </a>


    </div>
  );
};


export default Home