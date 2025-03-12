import React from 'react';
import header1 from "../assets/image/header1.png";
import header2 from "../assets/image/header2.png";
import header3 from "../assets/image/header3.png";

const SearchBar = () => {
  return (
    <div className="bg-white px-4 md:px-[8%] lg:px-[10%] w-full">
      <header className="flex flex-col md:flex-row items-center justify-between py-4 gap-4 w-full">
        {/* Logo Section */}
        <div className="w-full md:w-auto flex justify-between items-center">
          <img 
            src={header1} 
            className="w-[70px] h-auto md:w-[87px]" 
            alt="College Drishti Logo" 
          />
          {/* Mobile Menu Button */}
          <button className="md:hidden text-blue-600">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-2/4 lg:w-1/3 max-w-[600px]">
          <div className="relative">
            <input
              type="text"
              placeholder="What would you like to learn?"
              className="w-full py-2 pl-4 pr-10 text-gray-600 border-2 border-blue-200 rounded-full focus:outline-none focus:border-blue-400"
            />
            <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-600">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <div className="flex flex-col items-center">
            <img
              src={header2}
              alt="Learn & Earn icon"
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
            <span className="text-xs lg:text-sm text-blue-600">Learn & Earn</span>
          </div>
          
          <div className="flex flex-col items-center">
            <img
              src={header3}
              alt="Find my Uni icon"
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
            <span className="text-xs lg:text-sm text-blue-600">Find my Uni</span>
          </div>
          
          <button className="px-4 py-1 lg:px-6 lg:py-2 text-white bg-blue-600 rounded-full text-sm lg:text-base">
            Login
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center justify-between w-full mt-2">
          <div className="flex space-x-4">
            <button className="text-blue-600">
              <i className="fas fa-search text-lg"></i>
            </button>
            <button className="text-blue-600">
              <i className="fas fa-user-circle text-lg"></i>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
