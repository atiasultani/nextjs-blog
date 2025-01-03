import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  return (
    <div
      className="
        pt-[10px]
        grid 
        items-center
        w-full
        max-w-screen
        px-4
        md:px-10
        lg:px-20
      "
    >
      {/* Logo */}
      <div className="flex justify-between items-center">
        <h1
          className="
            font-extrabold 
            text-xl 
            md:text-2xl 
            lg:text-3xl
          "
        >
          NextJs Blog
        </h1>

        {/* Desktop Navigation */}
        <ul
          className="
            hidden 
            md:flex 
            gap-6 
            lg:gap-10 
            list-none
          "
        >
          <li>
            <Link
              className="
                hover:underline 
                hover:underline-offset-4
              "
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="
                hover:underline 
                hover:underline-offset-4
              "
              href="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="
                hover:underline 
                hover:underline-offset-4
              "
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-48 text-white bg-black">
            <ul className="flex flex-col gap-4 list-none p-4">
              <li>
                <Link
                  className="
                    hover:underline 
                    hover:underline-offset-4
                  "
                  href="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="
                    hover:underline 
                    hover:underline-offset-4
                  "
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="
                    hover:underline 
                    hover:underline-offset-4
                  "
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      {/* Search Bar */}
      <div
        className="
          flex 
          items-center 
          mt-4
          md:mt-6 
          w-full 
          max-w-md
          md:max-w-lg 
          lg:max-w-xl
          bg-gray-200 
          rounded-full 
          px-4 
          py-2
        "
      >
        <Image
          src="/header/search-icon.svg"
          alt="search bar"
          width={20}
          height={20}
          className="mr-3"
        />
        <input
          type="search"
          placeholder="Search for..."
          className="
            bg-gray-200 
            bg-opacity-40 
            w-full 
            outline-none 
            text-sm
          grid
            "
        />
      </div>
    </div>
  );
};

export default Header;
