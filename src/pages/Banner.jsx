import React from 'react';
import secondBanerMobile from "../assets/image/secondBanerMobile.png";
import tabScreenBaner from "../assets/image/tabScreenBaner.png";
import descBaneerImage from "../assets/image/descBaneerImage.png";

const Banner = () => {
  return (
    <div className="flex justify-center pt-2"> {/* Set minimum height for desktop banner */}
      {/* Mobile Banner */}
      <img
        src={secondBanerMobile}
        alt="Mobile Banner"
        className="md:hidden  w-[360.33px] h-[149.19px] top-[127.81px]"
      />
      
      {/* Tablet Banner */}
      <img
        src={tabScreenBaner}
        alt="Tablet Banner"
        className="hidden md:block lg:hidden  w-[694.02px] h-[244.61px] top-[121px] "
      />
      
      {/* Desktop Banner */}
      <img
        src={descBaneerImage}
        alt="Desktop Banner"
        className="hidden lg:block  w-[1203px] h-[424px] top-[176px]"
      />
    </div>
  );
};

export default Banner;