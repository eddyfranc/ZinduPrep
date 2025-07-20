import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white z-50 w-full">
      <div className="flex items-center space-x-2">
        <h1 className="text-teal-600 text-xl font-bold">ZinduaPrep</h1>
        {/* <img src="/logo.svg" alt="OctoPrep Logo" className="h-6 w-6" /> */}
        {/* <span className="text-teal-600 text-xl font-bold">ZinduaPrep</span> */}
      </div>

      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#program" className="hover:text-teal-600">Program</a>
        <a href="#pricing" className="hover:text-teal-600">Pricing</a>
        <a href="#about" className="hover:text-teal-600">About</a>
        <a href="#faq" className="hover:text-teal-600">FAQ</a>
      </div>

      <div className="flex items-center space-x-4">
        <button clasName="bg-teal-600 hover:bg-teal-700 text-white px-4">Enroll</button>
        <a href="/login" className="text-teal-600 font-medium">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
