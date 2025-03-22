import React from 'react';
import mento1 from "../assets/image/mento1.png";
import mento2 from "../assets/image/mento2.png";
import mobilMentor from "../assets/image/mobilMentor.png"
import rightButtonMentor from "../assets/image/rightButtonMentor.png"
import leftButtonMentor from "../assets/image/leftButtonMentor.png"
const Mentor = () => {
  return (
    <div className='bg-[#F3F7FF]'>
      {/* Desktop-only image (lg breakpoint and above) */}
      <img 
        src={mento1} 
        alt="Desktop mentor"
        className="hidden lg:block pl-" 
      />
      
      {/* Tablet-only image (md to lg breakpoint) */}
      <img 
        src={mento2} 
        alt="Tablet mentor"
        className="hidden md:block lg:hidden" 
      />
      {/* // mobile screen */}

      <div className='md:hidden w-[300px] h-[472px] bg-[#F3F7FF] p-4 mx-auto'>
  <div className='flex justify-center items-center w-full h-[44px] mb-4'>  
    <p className='font-poppins font-semibold text-[18px]'>Pick your Mentor</p>
  </div>
  <div className='w-full h-[28px] mb-6'> 
    <p className='font-poppins font-normal text-[8px] leading-[14px] text-center'>
      College Drishti has a team of expert counsellors ready to guide you through their experience of guiding 100s of students
    </p>
  </div>
  <div className='flex  '>
  <div className=''>
  <img 
    src={rightButtonMentor} 
    alt="Navigation button" 
    className='w-full h-full object-contain'
  />
</div>
  <img 
    src={mobilMentor} 
    alt="Mentors" 
    className='w-full h-[318px] object-contain'
  />
   <div className=''>
  <img 
    src={leftButtonMentor} 
    alt="Navigation button" 
    className='w-full h-full object-contain'
  />
</div>
  </div>
</div>
      
     
    </div>
  )
}

export default Mentor;