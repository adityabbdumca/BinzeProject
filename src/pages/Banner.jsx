import React from 'react';
import secondBanerMobile from "../assets/image/secondBanerMobile.png";
import tabScreenBaner from "../assets/image/tabScreenBaner.png";
import descBaneerImage from "../assets/image/descBaneerImage.png";
import hero1 from "../assets/image/hero1.png";
import hero2 from "../assets/image/hero2.png";
import baner2 from "../assets/image/baner2.png"
import baner3 from "../assets/image/baner3.png"
const Banner = () => {
  return (
    <div className="flex justify-center pt-2"> {/* Set minimum height for desktop banner */}
       <div className='md:hidden w-[360.33px] h-[149.19px] relative'>
  {/* Main Image */}
  <img 
    src={hero1} 
    alt="main" 
    className="w-full h-full object-cover" 
  />
  
  {/* Right Side Small Image */}
  <img 
  src={hero2} 
  alt="small" 
  className="absolute w-[80px] h-[140px] top-[0px] left-[270px] shadow-sm"
/>
  
  {/* Left Side Text */}
  <div className="absolute top-2 left-2 text-white p-2 rounded-lg max-w-[70%]">
  <p className="w-[129px] h-[42px] pt-2 font-poppins font-semibold text-xs leading-[14px] tracking-normal">
  Boost Your Career with Industry-Recognized Skills
</p>
<p className="w-[129px] h-[32px] pt-4 font-poppins font-normal text-[6px] leading-[8px] tracking-normal text-[#C4C4C4] whitespace-normal">
  Flexible, affordable courses designed to help you achieve your goals, whether you're at home, on the go, or anywhere in between.
</p>
<div className='flex'>
<button className="w-[59px] h-[13px] mt-[25px] rounded-[50px] bg-[#F1F1F1] font-poppins font-medium text-[5px] leading-[100%] tracking-normal text-[#0056D2] whitespace-nowrap flex items-center justify-center">
  Suggest Universities
</button>

<button className="min-w-[120px] h-[24px] pt-[15.4%] pr-[25%] font-poppins font-medium text-[5px]  text-gray-200 underline">
  Browse All Courses
</button>
</div>
  </div>
</div>
      
      {/* Tablet Banner */}
      <img
        src={tabScreenBaner}
        alt="Tablet Banner"
        className="hidden md:block lg:hidden  w-[694.02px] h-[244.61px] top-[121px] "
      />
      
      {/* Desktop Banner */}
      {/* <img
        src={descBaneerImage}
        alt="Desktop Banner"
        className="hidden lg:block  w-[1203px] h-[424px] top-[176px]"
      /> */}
      
      <div className='hidden lg:block  w-[1203px] h-[424px]   relative '>
  {/* Main Image */}
  <img 
    src={baner2} 
    alt="main" 
    className="w-full h-full object-cover" 
  />
  
  {/* Right Side Small Image */}
  <img 
  src={baner3} 
  alt="small" 
  className="absolute w-[267px] h-[400px] top-[0px] left-[870px] shadow-sm"
/>
  
  {/* Left Side Text */}
  <div className="absolute top-11 left-11 text-white p-2 rounded-lg max-w-[70%]">
  <p className="w-[435px] h-[112px]  font-poppins font-semibold text-3xl leading-[56px] tracking-normal text-white">
  Boost Your Career with Industry-Recognized Skills
</p>
<p className="w-[419px] h-[96px] pt-1 font-poppins font-normal text-base leading-8 tracking-normal text-[#C4C4C4]">
  Flexible, affordable courses designed to help you achieve your goals, whether you're at home, on the go, or anywhere in between.
</p>
<div className='flex mt-[8%]'>
<button className="w-[211px] h-[48px] gap-2 rounded-[50px] py-2 px-6 bg-[#F1F1F1] font-poppins font-medium text-base leading-none tracking-normal text-[#0056D4] whitespace-nowrap flex items-center justify-center">
  Suggest Universities
</button>

<button className="w-[180px] h-[24px] py-2 px-6  mt-2 font-poppins font-medium text-base leading-none tracking-normal text-[#F1F1F1] underline whitespace-nowrap overflow-hidden">
  Browse All Courses
</button>
</div>
  </div>
</div>
      


    </div>
  );
};

export default Banner;