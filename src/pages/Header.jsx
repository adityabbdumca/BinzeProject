import React from 'react';
import facebook from '../assets/image/facebook.png';
import youtube from '../assets/image/youtube.png';
import linkedin from '../assets/image/linkedin.png';
import instagram from '../assets/image/instagram.png';
import playStore from '../assets/image/playStore.png';
import appStore from '../assets/image/image.png';

const Header = () => {
  return (
    <header className="hidden sm:block relative bg-white shadow-sm">
      {/* Top Banner */}
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        {/* Campaign Text */}
        <div className="order-first mb-2 md:mb-0 md:order-none w-full md:w-auto text-center md:text-left">
          <p className="font-poppins font-medium text-sm md:text-base text-[#0056D2] underline decoration-solid hover:opacity-80 transition-opacity">
            #Chuno Vahi Jo Hai Sahi! Download Our App
          </p>
        </div>

        {/* Social Icons & App Downloads */}
        <div className="order-3 w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end space-x-2">
          <div className="flex items-center space-x-1">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={facebook} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={youtube} alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={instagram} alt="Instagram" className="w-5 h-5" />
            </a>
          </div>

          <div className="h-5 w-px bg-gray-400 mx-1 hidden md:block" />

          <div className="flex items-center space-x-1">
            <p className="font-poppins font-medium text-sm text-[#0056D2] hidden sm:inline-block">
              Download Our App
            </p>
            <a href="#" className="hover:scale-105 transition-transform">
              <img src={playStore} alt="Google Play" className="h-5" />
            </a>
            <a href="#" className="hover:scale-105 transition-transform">
              <img src={appStore} alt="App Store" className="h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
