import React, { useState } from "react";
import univer2 from "../assets/image/univer2.png";
import univr1 from "../assets/image/univr1.png";
import unvir3 from "../assets/image/unvir3.png";
import univer4 from "../assets/image/univer4.png";
import un11 from "../assets/image/un11.png";
import un12 from "../assets/image/un12.png";
import un13 from "../assets/image/un13.png";
import un14 from "../assets/image/un14.png";

const universities = [
  { alt: "Jain University logo", src: univer2 },
  { alt: "Jain University logo", src: univer2 },
  { alt: "Lovely Professional University logo", src: univr1 },
  { alt: "Whistling Woods International logo", src: unvir3 },
  { alt: "Wharton University logo", src: univer4 },
  { alt: "Wharton University logo", src: univer4 },
  { alt: "Vignan's University logo", src: un11 },
  { alt: "Vignan's University logo", src: un11 },
  { alt: "Uttaranchal University logo", src: un12 },
  { alt: "UPES logo", src: un13 },
  { alt: "University of Maryland logo", src: un14 },
  { alt: "University of Maryland logo", src: un14 }
];

const ExUniver = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-m-screen py-[2%]">
      <div className="text-center my-8">
  {/* Mobile Version */}
  <h1 className="sm:hidden mx-auto w-[222px] h-[59px] font-inter font-semibold text-[18px] leading-[59px] text-[#2F2F2F]">
    100+ trusted Universities
  </h1>

  {/* Desktop/Tablet Version */}
  <h1 className="hidden sm:block mx-auto w-[432px] h-[40px] font-poppins font-semibold text-[32px] leading-[40px] text-[#2F2F2F] md:text-[24px]">
    Explore Universities
  </h1>
</div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 px-4">
        {universities.map((university, index) => (
          <div
            key={index}
            className={`bg-white p-5 rounded-lg shadow-md flex items-center justify-center ${
              !showAll && index >= 9 ? "hidden md:flex" : ""
            }`}
          >
            <img alt={university.alt} src={university.src} width="163" height="50" />
          </div>
        ))}
      </div>

      {/* View All Button */}
      {!showAll && (
        <div className="my-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#0056D2] text-white py-2 px-6 rounded-full"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default ExUniver;
