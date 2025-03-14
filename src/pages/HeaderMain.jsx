import { NavLink,Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import header1 from "../assets/image/header1.png";
import header2 from "../assets/image/header2.png";
import header3 from "../assets/image/header3.png";
import icon1 from "../assets/image/icon1.png"
import icon2 from "../assets/image/icon2.png"
import icon3 from "../assets/image/icon3.png"
import icon4 from "../assets/image/icon4.png"
import icon5 from "../assets/image/icon5.png"
import icon6 from "../assets/image/icon6.png"
import facebook from '../assets/image/facebook.png';
import youtube from '../assets/image/youtube.png';
import linkedin from '../assets/image/linkedin.png';
import instagram from '../assets/image/instagram.png';
import playStore from '../assets/image/playStore.png';
import appStore from '../assets/image/image.png';
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const HeaderMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { label: "Courses", links: ["Course 1", "Course 2", "Course 3"] },
    { label: "Best University", links: ["University 1", "University 2", "University 3"] },
    { label: "Area of Interest", links: ["Interest 1", "Interest 2", "Interest 3"] },
    { label: "More", links: ["More 1", "More 2", "More 3"] },
  ];

  const mobileMenuItems = [
  { label: "Home", icon: icon1,path: '/' },
  { label: "PG Courses", icon: icon2,desc:"After Graduation",path:'/pgcourse'},
  { label: "UG Courses", icon: icon3,desc:"After 12th",path:"/ugcorses" },
  { label: "Advanced Diploma", icon: icon4 ,desc:"After 10th & 12th",path:"/advanceddiploma"},
  { label: "Certifications", icon: icon5, desc:"Any qualification",path: '/certificat' },
  { label: "Logout", icon: icon6,path: '/registation' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="bg-white">
      {/* Desktop Header */}
      <header className="hidden sm:flex items-center justify-between p-4 border-b px-[8%]">
        <img src={header1} className="w-[70px] md:w-[87px]" alt="College Drishti Logo" />

        {/* Search Bar */}
        <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
          <input className="border rounded-full py-2 px-4 w-full" placeholder="What would you like to learn?" type="text" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600">
            <FaSearch />
          </button>
        </div>

        {/* Right Section */}
        <div className="md:flex items-center space-x-4 w-full md:w-auto">
          <NavItem label="Learn & Earn" imgSrc={header2} />
          <NavItem label="Find my Uni" imgSrc={header3} />
         
          <Link to="/registation">
  <button className="bg-blue-600 text-white rounded-full py-2 px-4">
    Login
  </button>
</Link>
        </div>
      </header>

  {/* Mobile Header */}
 
<div className="sm:hidden flex items-center justify-between p-4 border-b">
  {/* Hamburger/Close Button */}
  <button 
    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200 z-50"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label={menuOpen ? "Close menu" : "Open menu"}
  >
    {menuOpen ? (
      <FaTimes className="w-5 h-5 text-gray-700" />
    ) : (
      <FaBars className="w-5 h-5 text-gray-700" />
    )}
  </button>

  {/* Centered Logo */}
  <img 
    src={header1} 
    className="w-[70px] absolute left-[25%] -translate-x-1/2" 
    alt="College Logo" 
  />

  {/* Find My Uni Section */}
  <div className="flex flex-col items-center  px-3 py-1 ml-auto">
  <p className="text-sm font-medium text-gray-700">Find my Uni</p>
  <img 
    src={header3} 
    className="w-5 h-5 mt-1"  // mt-1 for spacing
    alt="Find my Uni Icon" 
    aria-hidden="true" 
  />
</div>

</div>

{/* Mobile Menu */}
{menuOpen && (
  <div className="sm:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
    <div className="p-4 pt-14">
      {/* Close Button */}
      <div className="fixed top-4 left-4">
        <button 
          onClick={() => setMenuOpen(false)} 
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
          aria-label="Close menu"
        >
          <FaTimes className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Centered Logo */}
      <div className="flex justify-center mb-8">
        <img 
          src={header1} 
          className="w-[70px]"
          alt="College Logo" 
        />
      </div>

      {/* Menu Items */}
      <nav className="w-full mb-8">
  <ul className="space-y-3">    
    {mobileMenuItems.map((item, index) => (
      <li 
        key={index} 
        className="flex items-start p-1  hover:bg-gray-50 transition-colors duration-200"
      >
        {item.icon && (
          <img 
            src={item.icon}  
            className=" w-6 h-6 mr-3 mt-1  bg-gray-100 rounded-lg"  // Added mt-1 for better icon alignment
            
            alt="" 
            aria-hidden="true"
          />
        )}
        <div className="flex flex-col">
          <span className="font-mulish font-bold text-sm text-gray-800">
            
         
    <Link 
  to={item.path} 
  className="font-mulish font-bold text-sm text-gray-800 hover:text-blue-600 transition-colors"
  onClick={() => setMenuOpen(false)} // Add this line
>
  {item.label}
</Link>
          </span>
          {item.desc && (
            <span className="font-mulish text-xs text-gray-500 mt-1 leading-tight">
              {item.desc}
            </span>
          )}
        </div>
      </li>
    ))}
  </ul>
</nav>

      {/* Social & Download Section */}
      <div className=" ">
        <div className="justify-end flex gap-2   ">
  <a href=""> <img src={facebook} className="w-[20px] h-[20px] top-[493px] left-[298px]" alt="Facebook" /></a>
  <a href=""> <img src={youtube} className="w-[20px] h-[20px] top-[493px] left-[298px]" alt="YouTube" /></a>
  <a href=""> <img src={linkedin}className="w-[20px] h-[20px] top-[493px] left-[298px]" alt="LinkedIn" /></a>
  <a href=""> <img src={instagram}className="w-[20px] h-[20px] top-[493px] left-[298px]" alt="Instagram" /></a>
</div>
<div className="justify-end flex gap-2 mt-3">
  <p className="text-[#0056D2] font-poppins font-medium text-[10px] leading-6 tracking-[0]">Download Our App</p>
   <a href=""> <img src={playStore} className=" w-[20px] h-[20px] top-[493px] left-[298px]" alt="playStor" /></a>
    <a href=""> <img src={appStore} className=" w-[20px] h-[20px] top-[493px] left-[298px]" alt="AppStore" /></a>
</div>
      </div>
     </div>
        </div>
      
  

)}

      {/* Navigation Menu (Desktop) */}
      <nav className="bg-gray-100 hidden sm:block">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-center py-2">
            <div className="flex justify-center gap-2 md:space-x-6">
              {navItems.map((item, index) => (
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
    {imgSrc && <img alt={`${label} icon`} className="w-6 h-6" src={imgSrc} />}
  </div>
);

const Dropdown = ({ label, links, isActive, onToggle }) => {
  return (
    <div className="relative text-center dropdown-container">
      <button 
        className="flex items-center space-x-1 px-2 py-1 hover:bg-gray-200 rounded-lg transition-colors"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-sm md:text-base">{label}</span>
        <FaChevronDown className="text-xs md:text-sm" />
      </button>
      {isActive && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border rounded shadow-lg z-50">
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
