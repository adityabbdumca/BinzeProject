import React from "react";
import { NavLink } from "react-router-dom";
import foternav1 from "../assets/image/foternav1.png";
import foternav2 from "../assets/image/foternav2.png";
import foternav3 from "../assets/image/foternav3.png";
import foternav4 from "../assets/image/foternav4.png";
import foternav5 from "../assets/image/foternav5.png";

const Badge = ({ text }) => (
  <div className="absolute -top-1 -right-2 bg-red-500 text-white text-[11px] px-1.5 py-0.5 rounded-full shadow-md 
                  font-medium transform translate-x-1/2 transition-all duration-300 group-hover:scale-110 
                  origin-center animate-popIn">
    {text}
  </div>
);

const FooterNav = () => {
  const navItems = [
    { icon: foternav1, label: "Home", path: "/" },
    { icon: foternav2, label: "Search", path: "/search" },
    { icon: foternav3, label: "University", badge: "Find", path: "/universities" },
    { icon: foternav4, label: "Mentor", badge: "Suggest", path: "/mentors" },
    { icon: foternav5, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-between items-center bg-white pt-4 pb-4 px-6
                    shadow-2xl border-t border-gray-100 safe-area-bottom">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `relative flex flex-col items-center focus:outline-none group transition-all duration-300 
             ${isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-700"}`
          }
          aria-label={item.label}
        >
          <div className="relative p-2 rounded-2xl transition-all duration-300 
                          group-hover:bg-gray-50 group-active:scale-90
                          hover:shadow-sm">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img
                alt={item.label}
                className="w-[23px] h-[23px] transition-transform duration-300 group-hover:scale-110 
                           group-active:scale-95 object-contain"
                src={item.icon}
              />
              {item.badge && <Badge text={item.badge} />}
            </div>
          </div>
          <span className="text-[10px] font-semibold tracking-wide transition-all duration-300 
                           group-hover:text-gray-800">
            {item.label}
          </span>
          
          {/* Active state indicator */}
          {({ isActive }) =>
            isActive && (
              <div className="absolute top-0 w-1.5 h-1.5 bg-blue-600 rounded-full -translate-y-[3px] 
                              animate-pulse-ring origin-center" />
            )
          }
        </NavLink>
      ))}
    </div>
  );
};

export default FooterNav;
