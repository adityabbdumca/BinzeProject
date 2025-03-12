import { useState } from 'react';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Courses', hasDropdown: true },
    { label: 'Best University', hasDropdown: true },
    { label: 'Area of Interest', hasDropdown: true },
    { label: 'More', hasDropdown: true }
  ];

  return (
    <nav className="bg-white shadow-md  flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between items-center  h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center focus:outline-none">
                  {item.label}
                  {item.hasDropdown && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-2 h-3 w-3 transition-transform group-hover:rotate-180"
                    />
                  )}
                </button>
                {/* Dropdown Menu (Add your dropdown content here) */}
                <div className="hidden group-hover:block absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-1">
                  {/* Dropdown items */}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button className="w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium flex items-center justify-between">
                  {item.label}
                  {item.hasDropdown && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="h-3 w-3 ml-2"
                    />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;