import React, { useState } from 'react';
import succesStor from '../assets/image/succesStor.png';
import suc2 from '../assets/image/suc2.png';
import succes1 from '../assets/image/succes1.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [succesStor, suc2, succes1];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-center text-xl font-bold text-blue-600 mb-6 md:text-2xl">
          Success Stories: Real Experiences, Real Impact!
        </h2>
        
        <div className="flex justify-center items-center">
          <div className="relative w-full overflow-hidden h-[250px] md:max-w-2xl md:h-[400px]">
            <div className="flex transition-all duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((img, index) => (
                <div key={index} className="min-w-full relative">
                  <div className="aspect-video w-full h-full">
                    <img
                      src={img}
                      alt="Success story"
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute inset-0 flex items-center justify-center">
                    <SiYoutubemusic className="text-blue-600 text-5xl md:text-6xl" />
                  </button>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="md:hidden absolute inset-0">
              <button 
                onClick={handlePrev}
                className="absolute left-1 top-1/3 -translate-y-1/2 bg-white/80 rounded-full p-3 hover:bg-white transition-colors shadow-lg z-10"
              >
                <FaChevronLeft className="text-gray-600 text-xl" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-1 top-1/3 -translate-y-1/2 bg-white/80 rounded-full p-3 hover:bg-white transition-colors shadow-lg z-10"
              >
                <FaChevronRight className="text-gray-600 text-xl" />
              </button>
            </div>

            {/* Desktop Navigation Buttons */}
            <div className="hidden md:flex justify-between items-center absolute inset-0 px-2">
              <button 
                onClick={handlePrev}
                className="bg-white/80 rounded-full p-3 hover:bg-white transition-colors shadow-lg"
              >
                <FaChevronLeft className="text-gray-600 text-2xl" />
              </button>
              <button 
                onClick={handleNext}
                className="bg-white/80 rounded-full p-3 hover:bg-white transition-colors shadow-lg"
              >
                <FaChevronRight className="text-gray-600 text-2xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3 md:text-2xl">
            Ready to upgrade your career?
          </h3>
          <p className="text-gray-600 mb-5 text-sm md:text-base">
            Master new skills, advance your career, and achieve your goals
            through our expertly crafted online learning experiences.
          </p>
          <div className="max-w-xs mx-auto">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors w-full">
              Connect to Alumni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;