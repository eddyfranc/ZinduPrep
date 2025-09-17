import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-solid border-black-900 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <h1 className="text-red-500 text-xl font-bold">ZinduPrep</h1>
      </div>

<div className="flex items-center space-x-6">
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="" className="hover:text-red-500">Program</a>
        <a href="#pricing" className="hover:text-red-500">Pricing</a>
        <a href="#about" className="hover:text-red-500">About</a>
        <a href="#faq" className="hover:text-red-500">FAQ</a>
      </div>
      

      <div className="flex items-center space-x-4">
        <button className="bg-red-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition duration-200">
          Enroll
        </button>
        <a href="/login" className="text-red-500 font-medium hover:underline">
          Login
        </a>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

