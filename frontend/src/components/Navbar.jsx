import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Navbar() {
  return (
    <>
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-2 ">
        {/* Logo */}
        <div className="text-xl font-bold">
          Logo
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li className="hover:text-gray-400 cursor-pointer">Buy Now</li>
            <li className="hover:text-gray-400 cursor-pointer">Log In</li>
            <li className="hover:text-gray-400 cursor-pointer">Create Account</li>
          </ul>

          {/* Cart Section */}
          <div className="flex items-center space-x-2 ">
           <div className='w-[50px] h-[50px] bg-red-500 flex justify-center items-center rounded-full'>
           <FaShoppingCart className="text-3xl " />
           </div>
            <div>
              <p className="text-sm">My Cart</p>
              <p className="text-sm">INR 00.00</p>
            </div>
          </div>
        </div>
      </div>
      
    </nav>
    <div className=" text-black">
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Main Navigation */}
        <div>
          <ul className="flex space-x-6">
            {/* Dropdown for 'Play' */}
            <li className="relative group">
              <span className="inline-flex items-center px-4 text-sm font-medium focus:outline-none focus:bg-gray-700 cursor-pointer ">
                Play <MdKeyboardArrowDown className='inline' />  {/* <MdKeyboardArrowUp className='inline'/> */}
              </span>
              <div className="absolute left-0 w-40 mt-1 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">Draws</li>
            <li className="hover:text-gray-400 cursor-pointer">Community</li>
            <li className="hover:text-gray-400 cursor-pointer">Latest News</li>
            <li className="hover:text-gray-400 cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Currency and Language */}
        <div>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-400 cursor-pointer">Currency</li>
            <li className="hover:text-gray-400 cursor-pointer">Language</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
