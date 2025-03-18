import React from 'react';
import foternav1 from "../assets/image/foternav1.png";
import foternav2 from "../assets/image/foternav2.png";
import foternav3 from "../assets/image/foternav3.png";
import foternav4 from "../assets/image/foternav4.png";
import foternav5 from "../assets/image/foternav5.png";

const FooterNav = () => {
  const Badge = ({ text }) => (
    <div className="absolute -top-1 -right-2 bg-red-500 text-white text-[11px] px-1.5 py-0.5 rounded-full shadow-md font-medium transform translate-x-1/2">
      {text}
    </div>
  );

  const navItems = [
    { icon: foternav1, label: 'Home', isActive: true },
    { icon: foternav2, label: 'Search' },
    { icon: foternav3, label: 'University', badge: 'Find' },
    { icon: foternav4, label: 'Mentor', badge: 'Suggest' },
    { icon: foternav5, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-between items-center bg-white pt-3 pb-4 px-6 shadow-2xl border-t border-gray-100 safe-area-bottom">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`relative flex flex-col items-center focus:outline-none group transition-all duration-200 ${
            item.isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
          aria-label={item.label}
        >
          <div className="relative  p-2 rounded-2xl transition-all duration-200 
            group-hover:bg-gray-50 group-active:scale-95">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img
                alt=""
                className="w-full h-full object-contain"
                src={item.icon}
              />
              {item.badge && <Badge text={item.badge} />}
            </div>
          </div>
          <span className={`text-[10px] font-semibold tracking-wide transition-colors ${
            item.isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-gray-800'
          }`}>
            {item.label}
          </span>
          
          {/* Active state indicator */}
          {item.isActive && (
            <div className="absolute top-0 w-1.5 h-1.5 bg-blue-600 rounded-full -translate-y-[3px]" />
          )}
        </button>
      ))}
    </div>
  );
};

export default FooterNav;