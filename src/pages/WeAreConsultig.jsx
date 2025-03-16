import React, { useState, useEffect } from 'react';
import weConsultin1 from "../assets/image/weConsultin1.png";
import weConsultin2 from "../assets/image/weConsultin2.png";

const WeAreConsultig = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [weConsultin1, weConsultin2];

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate images on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative">
      {/* Desktop/Tablet View */}
      <div className="hidden md:flex justify-center gap-4">
        <img 
          src={weConsultin1} 
          alt="Consulting Service 1" 
          className="max-w-[45%] h-auto object-contain"
        />
        <img 
          src={weConsultin2} 
          alt="Consulting Service 2" 
          className="max-w-[45%] h-auto object-contain"
        />
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Consulting Service ${index + 1}`}
            className={`w-full h-auto transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WeAreConsultig;