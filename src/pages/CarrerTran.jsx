import React from "react";
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
  const images = Array(16).fill(pytem1);
  const emLoy = [
    emp1, emp2, emp3, emp4, emp5, emp6, emp7, emp8,
    carreerTra9, carreerTra10, carreerTra11, carreerTra12, carreerTra14, carreerTra15, emp2,carreerTra16
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          1 Lakh+ Career Transformations
        </h1>
        <p className="text-center mb-8 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          These are some gems of College Drishti hired by leading companies
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center ${
                index >= 8 ? "hidden sm:flex" : "flex"
              }`}
            >
              <div className="mb-2 sm:mb-4">
                <img
                  alt="Profile picture of a person"
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover"
                  src={emLoy[index]}
                />
              </div>
              <div className="bg-white w-16 h-8 sm:w-24 sm:h-10 rounded-lg flex justify-center items-center p-1">
                <img
                  alt="Company logo"
                  className="w-12 h-3 sm:w-16 sm:h-5 object-contain"
                  src={image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrerTran;