
import React from 'react';
import univr1 from "../assets/image/univr1.png"
import univer2 from "../assets/image/univer2.png"
import unvir3 from "../assets/image/unvir3.png"
import univer4 from "../assets/image/univer4.png"
import un11 from "../assets/image/un11.png"
import un12 from "../assets/image/un12.png"
import un13 from "../assets/image/un13.png"
import un14 from "../assets/image/un14.png"
const TrustedUniversities = () => {
  const universities = [
    {
      alt: "Jain University logo",
      src: univr1,
    },
    {
      alt: "Lovely Professional University logo",
      src:univer2,
    },
    {
      alt: "Woolf University logo",
      src: unvir3,
    },
    {
      alt: "Wharton University of Pennsylvania logo",
      src: univer4,
    },
    {
      alt: "Vignan's University logo",
      src: un11,
    },
    {
      alt: "Uttaranchal University logo",
      src: un12,
    },
    {
      alt: "UPES logo",
      src: un13,
    },
    {
      alt: "University of Maryland logo",
      src: un14,
    },
  ];

  return (
    <div className="bg-white flex items-center justify-center min-m-screen py-[2%]">
      <div className="container mx-auto px-4  min-[20%]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-3xl font-semibold">100+ trusted Universities</h1>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {universities.map((university, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white shadow-md">
                <img alt={university.alt} src={university.src} width="150" height="50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedUniversities;
