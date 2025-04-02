
import React, { useState } from "react";
import pytem1 from "../assets/image/pytem1.png";
import emp1 from "../assets/image/emp1.png";
import emp2 from "../assets/image/emp2.png";
import emp3 from "../assets/image/emp3.png";
import emp4 from "../assets/image/emp4.png";
import emp5 from "../assets/image/emp5.png";
import emp6 from "../assets/image/emp6.png";
import emp7 from "../assets/image/emp7.png";
import emp8 from "../assets/image/emp8.png";
import carreerTra9 from "../assets/image/carreerTra9.png";
import carreerTra10 from "../assets/image/carreerTra10.png";
import carreerTra11 from "../assets/image/carreerTra11.png";
import carreerTra12 from "../assets/image/carreerTra12.png";
import carreerTra14 from "../assets/image/carreerTra14.png";
import carreerTra15 from "../assets/image/carreerTra15.png";
import carreerTra16 from "../assets/image/carreerTra16.png";

const CarrerTran = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const emLoy = [
    {image: emp1, 
      note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: emp2, 
        note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: emp3, 
          note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: emp4, 
            note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: emp5, 
              note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: emp6, 
                note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: emp7, 
                  note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: emp8, 
                    note: "Placed at Google with ₹15 LPA package",company: pytem1},
    {image: carreerTra9, 
      note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: carreerTra10, 
        note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: carreerTra11, 
          note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: carreerTra12, 
            note: "Placed at Google with ₹15 LPA package",company: pytem1}, 
    {image: carreerTra14, 
      note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: carreerTra15, 
        note: "Placed at Google with ₹15 LPA package",company: pytem1}, {image: carreerTra16, 
          note: "Placed at Google with ₹15 LPA package",company: pytem1},
  ];
  

  // Duplicate the array to create seamless loop
  const duplicatedEmLoy = [...emLoy, ...emLoy];
  const handleCardClick = (story) => {
    setSelectedStory(story);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStory(null);
  };

  return (
    <div className="bg-gray-900 text-white w-full">
      <div className="container mx-auto py-12 px-1 lg:px-1">
      <h1 className="text-[#F1F1F1] font-poppins font-semibold text-center 
              mx-auto leading-[40px]
              text-[18px] 
              sm:text-[24px] 
              lg:text-[32px]">
  1 Lakh+ Career Transformations
</h1>

        <p className="text-center mb-8 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          These are some gems of College Drishti are hired by some leading companies
        </p>

        {/* Single carousel section */}
        <div className="overflow-x-hidden relative">
          <div className="flex animate-scroll">
            {duplicatedEmLoy.map((story, index) => (
              <div 
                key={`${index}-${story.image}`}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4 cursor-pointer"
                onClick={() => handleCardClick(story)}
              >
                <div className="relative flex flex-col items-center">
                  <div className="mb-2 sm:mb-4">
                    <img
  alt="Profile"
  className="rounded-full w-[68px] h-[68px] object-cover hover:scale-105 transition-transform 
           md:w-[87px] md:h-[87px] 
           lg:w-[108px] lg:h-[108px]"
  src={story.image}
/>
                  </div>
                  <div className="bg-white   w-[74px] h-[24px] -mt-[25%] md:w-[96px] md:h-[28px] md:-mt-[27%]   lg:w-[128px] lg:h-[37px] lg:-mt-[24%] rounded-lg flex justify-center items-center p-1">
                    <img
                      alt="Company logo"
                      className="w-[38px] h-[11px] md:w-[50px] md:h-[15px] lg:w-[68px] lg:h-[21px]  object-contain"
                      src={story.company}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* // second line */}
        <div className=" mt-4 overflow-x-hidden relative ">
          <div className="flex animate-scroll ">
            {duplicatedEmLoy.reverse().map((story, index) => (
              <div 
                key={`${index}-${story.image}`}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4 cursor-pointer"
                onClick={() => handleCardClick(story)}
              >
                <div className="relative flex flex-col items-center">
                  <div className="mb-2 sm:mb-4">
                    <img
  alt="Profile"
  className="rounded-full w-[68px] h-[68px] object-cover hover:scale-105 transition-transform 
           md:w-[87px] md:h-[87px] 
           lg:w-[108px] lg:h-[108px]"
  src={story.image}
/>
                  </div>
                  <div className="bg-white   w-[74px] h-[24px] -mt-[25%] md:w-[96px] md:h-[28px] md:-mt-[27%]   lg:w-[128px] lg:h-[37px] lg:-mt-[24%] rounded-lg flex justify-center items-center p-1">
                    <img
                      alt="Company logo"
                      className="w-[38px] h-[11px] md:w-[50px] md:h-[15px] lg:w-[68px] lg:h-[21px]  object-contain"
                      src={story.company}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story Modal */}
        {showModal && selectedStory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 relative">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Success Story
                </h3>
                <img
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500"
                  src={selectedStory.image}
                  alt="Success profile"
                />
                <p className="text-gray-700 text-lg font-medium">
                  {selectedStory.note}
                </p>
                <div className="flex justify-center">
                  <img
                    className="h-8 object-contain"
                    src={selectedStory.company}
                    alt="Company logo"
                  />
                </div>
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        
      </div>
      
    </div>
  );
};

export default CarrerTran;