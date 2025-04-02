import React from 'react';
import mento1 from "../assets/image/mento1.png";
import mento2 from "../assets/image/mento2.png";
import mobilMentor from "../assets/image/mobilMentor.png"
import rightButtonMentor from "../assets/image/rightButtonMentor.png"
import leftButtonMentor from "../assets/image/leftButtonMentor.png"
const Mentor = () => {
  return (
    <div className='flex justify-center items-center bg-[#F3F7FF] w-full '>
      {/* Desktop-only image (lg breakpoint and above) */}

      
     {/* <div className='lg:w-full lg:h-[741px] md:w-full md:h-[569px]  lg:pl-4'>
     <img src={mento1} alt="" />
      
     </div>
       */}
      {/* Tablet-only image (md to lg breakpoint) */}
      
     
      
   
      {/* // mobile screen */}

      <div className='md:hidden w-[300px] h-[400px] bg-[#F3F7FF] p-4 mx-auto'>
  <div className='flex justify-center items-center w-full h-[44px] mb-3'>  
    <p className='font-poppins font-semibold text-[18px]'>Pick your Mentor</p>
  </div>
  <div className='w-full h-[28px] mb-5'> 
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