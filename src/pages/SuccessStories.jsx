import React from 'react';
import succesStoryDesctop from "../assets/image/succesStoryDesctop.png";
import successStoryTab from "../assets/image/successStoryTab.png";
import suceDesk from "../assets/image/suceDesk.png"
 // Add mobile image import

const SuccessStories = () => {
  return (
    <div className="py-8">
      {/* Desktop Image - shows only on xl screens */}
      <div className="hidden xl:block w-full h-[744px] mx-auto">
  <img 
    src={suceDesk} 
    alt="Desktop success stories"
    className="w-[1640px] h-[744px] object-cover" 
  />
</div>

      {/* Tablet Image - shows only on md/lg screens */}
      <div className="hidden md:block lg:block xl:hidden">
        <img 
          src={successStoryTab} 
          alt="Success stories tablet version"
          className="mx-auto w-[1033px] h-[422px]  object-cover"
        />
      </div>

      {/* Mobile Image - shows only on small screens */}
      <div className="block md:hidden">
        <img 
          src={successStoryTab} // Make sure to import mobile image
          alt="Success stories mobile version"
          className="mx-auto w-[355px] h-[240px] object-cover rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
};

export default SuccessStories;