import React, { useState, useEffect } from 'react';
import banner1 from "../assets/image/banner1.jpg";
import banner2 from "../assets/image/banner2.jpg";
import banner3 from "../assets/image/banner3.jpg";
import banner4 from "../assets/image/banner4.jpg";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index when switching between mobile/desktop
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const desktopImages = [banner1, banner2];
  const mobileImages = [banner3, banner4];

  return (
    <div className="banner-container flex justify-center">
      {/* Desktop/Laptop View */}
      {!isMobile && (
        <img 
          src={desktopImages[currentIndex]} 
          alt="Desktop Banner" 
          className="desktop-banner"
        />
      )}
      
      {/* Mobile View */}
      {isMobile && (
        <img 
          src={mobileImages[currentIndex]} 
          alt="Mobile Banner" 
          
          className="mobile-banner w-[360.33px] h-[149.19px]  left-[16px] bg-white"
        />
      )}
    </div>
  );
};

export default Banner;