import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-500 bg-opacity-25 text-black py-8">
      {/* Wrapper Container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div
          className="
            grid 
            gap-8 
            md:gap-12 
            lg:gap-16 
            grid-cols-1 
            md:grid-cols-3 
            lg:grid-cols-5
          "
        >
          {/* Column 1 - Branding & Social Links */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl md:text-2xl font-extrabold">Blogs</h1>
            <p className="text-sm md:text-base leading-relaxed">
              We are providing blog content
            </p>
            <div className="flex items-center gap-4">
           <Link href='https://www.google.com' target='blank'>   <Image src="/footer/1.png" alt="Twitter" width={26} height={26} /></Link>
              <Link href='https://web.facebook.com/?_rdc=1&_rdr#' target='blank'><Image src="/footer/2.png" alt="Facebook" width={26} height={26} /></Link>
             <Link href='https://www.Instagram.com' target='blank'> <Image src="/footer/3.png" alt="Instagram" width={26} height={26} /></Link>
             <Link href='https://www.Github.com' target='blank'> <Image src="/footer/4.png" alt="Github" width={26} height={26} /></Link>
            </div>
          </div>

          {/* Column 2 - Company Links */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg md:text-xl">Company</h2>
            <ul className="text-sm md:text-base space-y-1">
              <li>About</li>
              <li>Features</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg md:text-xl">Resources</h2>
            <ul className="text-sm md:text-base space-y-1">
              <li>Blog</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg md:text-xl">Contact</h2>
            <ul className="text-sm md:text-base space-y-1">
              <li>Email: contact@blog.co</li>
              <li>Phone: +123 456 789</li>
              <li>Address: 123 blogers office</li>
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg md:text-xl">Stay Updated</h2>
            <p className="text-sm md:text-base">
              Subscribe to our newsletter to get the latest updates and blogs.
            </p>
            <form className="flex items-center gap-2 -ml-48 md:py-20">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-auto px-4 py-2 border rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm md:text-base hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm md:text-base">
          <p>&copy; 2025 Blog.CO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
