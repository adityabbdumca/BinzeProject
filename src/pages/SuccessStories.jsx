import React from 'react';
import successStoryDesktop from "../assets/image/succesStoryDesctop.png";
import successStoryTablet from "../assets/image/successStoryTab.png";
import sucsesStoryMobile from "../assets/image/sucsesStoryMobile.png";

const SuccessStories = () => {
  return (
    <div className="py-8  lg:h-[744px]">
      {/* Responsive Image Container */}
      <div className="mx-auto">
        {/* Desktop Image */}
        <div className="hidden xl:block">
          <img 
            src={successStoryDesktop} 
            alt="Desktop success stories"
            className="w-full max-w-screen-2xl h-auto object-contain mx-auto"
          />
        </div>

        {/* Tablet Image */}
        <div className="hidden md:block xl:hidden">
          <img 
            src={successStoryTablet} 
            alt="Success stories tablet version"
            className="w-full max-w-6xl h-auto object-contain mx-auto"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full h-[220px]  ">
  <img 
    src={sucsesStoryMobile}
    alt="Success stories mobile version"
    className="mx-auto rounded-lg shadow-sm"
  />
</div>

      </div>
    </div>
  );
};

export default SuccessStories;