import React from 'react';
import foternav1 from "../assets/image/foternav1.png";
import foternav2 from "../assets/image/foternav2.png";
import foternav3 from "../assets/image/foternav3.png";
import foternav4 from "../assets/image/foternav4.png";
import foternav5 from "../assets/image/foternav5.png";

const FooterNav = () => {
  const Badge = ({ text }) => (
    <div className="absolute top-0 right-0 -translate-y-1/2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md">
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
    <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-around items-center bg-white py-4 shadow-xl border-t border-gray-200">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`relative text-center focus:outline-none transition-all duration-300 transform ${item.isActive ? 'scale-110' : 'hover:scale-105'}`}
        >
          <div className="relative flex justify-center items-center p-2 bg-gray-100 rounded-full shadow-md">
            <img
              alt={`${item.label} icon`}
              className="w-[33px] h-[30px]"
              src={item.icon}
            />
            {item.badge && <Badge text={item.badge} />}
          </div>
          <p className={`text-xs mt-1 font-medium ${item.isActive ? 'text-blue-600' : 'text-gray-600'}`}>
            {item.label}
          </p>
        </button>
      ))}
    </div>
  );
};

export default FooterNav;
