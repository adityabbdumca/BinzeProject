import { useState } from "react";
import header1 from "../assets/image/header1.png";
import header2 from "../assets/image/header2.png";
import header3 from "../assets/image/header3.png";
import { FaSearch, FaChevronDown, FaBars } from "react-icons/fa";

const HeaderMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="bg-white">
      <header className="flex items-center justify-between p-4 border-b md:flex-row flex-col px-[8%] ">
        {/* Left Section - Logo and Mobile Menu Button */}
        <div className="w-full flex justify-between items-center md:w-auto">
          <img src={header1} className="w-[70px] md:w-[87px]" alt="College Drishti Logo" />
          <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>

        {/* Middle Section - Input Field */}
        <div className="relative w-full md:w-1/2 mt-4 md:mt-0 mx-0 md:mx-4">
          <input className="border rounded-full py-2 px-4 w-full" placeholder="What would you like to learn?" type="text" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600">
            <FaSearch />
          </button>
        </div>

        {/* Right Section - Navigation Items */}
        <div className={`md:flex items-center space-x-4 w-full md:w-auto ${menuOpen ? 'flex flex-col space-y-4 mt-4' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <NavItem label="Learn & Earn" imgSrc={header2} />
            <NavItem label="Find my Uni" imgSrc={header3} />
            <button className="bg-blue-600 text-white rounded-full py-2 px-4">Login</button>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="md:flex justify-center py-2">
            <div className="flex  justify-center gap-2 md:space-x-6">
              {[
                { label: "Courses", links: ["Course 1", "Course 2", "Course 3"] },
                { label: "Best University", links: ["University 1", "University 2", "University 3"] },
                { label: "Area of Interest", links: ["Interest 1", "Interest 2", "Interest 3"] },
                { label: "More", links: ["More 1", "More 2", "More 3"] },
              ].map((item, index) => (
                <Dropdown 
                  key={index}
                  label={item.label}
                  links={item.links}
                  isActive={activeDropdown === index}
                  onToggle={() => setActiveDropdown(activeDropdown === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ label, imgSrc }) => (
  <div className="flex items-center space-x-2">
    <span>{label}</span>
    <img alt={`${label} icon`} className="w-6 h-6" src={imgSrc} />
  </div>
);

const Dropdown = ({ label, links, isActive, onToggle }) => {
  return (
    <div className="relative text-center">
      <button 
        className="flex items-center space-x-1 px-2 py-1 md:px-0 hover:bg-gray-200 rounded-lg transition-colors"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-sm md:text-base">{label}</span>
        <FaChevronDown className="text-xs md:text-sm" />
      </button>
      {isActive && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border rounded shadow-lg z-50 transition-opacity duration-200 ease-in-out">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base"
              onClick={(e) => e.stopPropagation()}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderMain;
