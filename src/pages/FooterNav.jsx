import React from 'react';
import foternav1 from "../assets/image/foternav1.png"
import foternav2 from "../assets/image/foternav2.png"
import foternav3 from "../assets/image/foternav3.png"
import foternav4 from "../assets/image/foternav4.png"
import foternav5 from "../assets/image/foternav5.png"

const FooterNav = () => {
  const Badge = ({ text }) => (
    <div className="absolute top-0 left-1/2 -translate-x-1/1   -translate-y-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
      {text}
    </div>
  );

  const navItems = [
    {
      icon: foternav1,
      label: 'Home',
      isActive: true,
    },
    {
      icon: foternav2,
      label: 'Search',
    },
    {
      icon: foternav3,
      label: 'University',
      badge: 'Find',
    },
    {
      icon: foternav4,
      label: 'Mentor',
      badge: 'Suggest',
    },
    {
      icon: foternav5,
      label: 'Profile',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-around items-center bg-white pt-[6%] pb-7">
      {navItems.map((item, index) => (
        <button
          key={index}
          className="text-center focus:outline-none"
        >
          <div className="relative">
            <img
              alt={`${item.label} icon`}
              className="w-[33px] h-[30px] border-[1.5px]"
              src={item.icon}
            />
            {item.badge && <Badge text={item.badge} />}
          </div>
          <p className={`text-xs mt-1 ${item.isActive ? 'text-blue-600' : 'w-[38px] h-[14px] font-[Poppins] font-normal text-[10px] leading-[14px]'}`}>
            {item.label}
          </p>
        </button>
      ))}
    </div>
  );
};

export default FooterNav;