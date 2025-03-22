import React from 'react';
import univr1 from "../assets/image/univr1.png";
import univer2 from "../assets/image/univer2.png";
import unvir3 from "../assets/image/unvir3.png";
import univer4 from "../assets/image/univer4.png";
import un11 from "../assets/image/un11.png";
import un12 from "../assets/image/un12.png";
import un13 from "../assets/image/un13.png";
import un14 from "../assets/image/un14.png";

const TrustedUniversities = () => {
  const universities = [
    { alt: "Jain University logo", src: univr1 },
    { alt: "Lovely Professional University logo", src: univer2 },
    { alt: "Woolf University logo", src: unvir3 },
    { alt: "Wharton University of Pennsylvania logo", src: univer4 },
    { alt: "Vignan's University logo", src: un11 },
    { alt: "Uttaranchal University logo", src: un12 },
    { alt: "UPES logo", src: un13 },
    { alt: "University of Maryland logo", src: un14 },
  ];

  return (
    <div className="bg-white py-8 md:py-12">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex flex-col items-center px-4">
          <h1 className="text-2xl font-semibold mb-10 text-center font-poppins">
            100+ Trusted Universities
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-4">
            {universities.slice(0,6).map((university, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-white 
                border border-gray-200 rounded-lg"
              >
                <img 
                  alt={university.alt} 
                  src={university.src} 
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Layout */}
      <div className="hidden md:block container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 max-w-[424px] h-[118px]">
            <h1 className="text-[32px] lg:pl-20 leading-[48px] font-semibold text-left font-poppins 
              tracking-[-0.96px]">
              <span className="block">100+ Trusted</span>
              <span className="block">Universities</span>
            </h1>
          </div>
          <div className="md:w-2/3 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {universities.map((university, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-white 
                rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  alt={university.alt} 
                  src={university.src} 
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedUniversities;