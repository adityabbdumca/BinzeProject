import React from 'react';

const ReadyToUp = () => {
  return (
    <div className="bg-[#D3E9FF] rounded-[20px] mx-auto lg:mt-[8%]
      lg:max-w-[1320px] lg:min-h-[295px] 
      md:max-w-[704px] md:min-h-[187px] 
      max-w-[361px] h-[96px] 
      
      relative overflow-hidden px-4 py-6 md:p-8
      flex flex-col items-center justify-center
      space-y-3 md:space-y-4 lg:space-y-6">
      
      {/* Heading */}
      <h1 className="font-poppins font-normal text-[#34353C] 
        text-center 
        text-[12px] md:text-[24px] lg:text-[48px]
        leading-[1.2] tracking-[-0.04em]
        w-full max-w-[90%] lg:max-w-[1008px]
        mx-auto">
        Ready to upgrade your career?
      </h1>

      {/* Paragraph */}
      <p className="font-poppins font-normal text-[#34353C] 
        text-center 
        text-[6px] md:text-[10px] lg:text-[20px]
        leading-[1.5] 
        max-w-[90%] md:max-w-[340px] lg:max-w-[868px]
        mx-auto">
        Master new skills, advance your career, and achieve your goals through our expertly crafted online learning experiences.
      </p>

      {/* Button */}
      <button className="font-poppins font-medium text-white bg-[#3661F5] hover:bg-blue-700 
    transition-colors duration-300 
    flex items-center justify-center gap-2.5
    w-[135px] md:w-[180px] lg:w-[209px]
    h-[23px] md:h-[32px] lg:h-[48px]
    rounded-[46px]
    text-[10px] md:text-[14px] lg:text-[16px]
    px-4 md:px-5 lg:px-6
    py-1.5 md:py-2">
    
    Connect to Alumni
</button>

      {/* Background Image */}
      <img
        alt="Decorative background"
        className="absolute bottom-0 right-0 w-full h-full object-cover opacity-10 pointer-events-none"
        src="https://storage.googleapis.com/a1aa/image/ooNnQ98uhZMFTEJtjqINUIuihq8r4sFkaBveAjcDMfI.jpg"
      />
    </div>
  );
};

export default ReadyToUp;