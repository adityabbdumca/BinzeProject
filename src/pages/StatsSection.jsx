import stationSectio1 from '../assets/image/stationSectio1.png';
import stationSectio2 from '../assets/image/stationSectio2.png';
import stationSectio3 from '../assets/image/stationSectio3.png';
import stationSectio4 from '../assets/image/stationSectio4.png';

const StatsSection = () => {
  return (
    <div className="bg-[#F3F7FF] mt-5 py-6 sm:py-8 w-full h-[288px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 p-4">
          {/* Stat Item 1 */}
          <div className="text-center p-4">
            <div className="mx-auto mb-3 
              w-[30px] h-[30px]    /* Mobile */
              md:w-[32px] md:h-[32px]  /* Tablet */
              xl:w-[60px] xl:h-[60px]  /* Desktop */">
              <img 
                src={stationSectio1} 
                alt="Expert counsellors available" 
                className="object-contain w-full h-full"
              />
            </div>
            <p className="font-poppins font-semibold 
              text-[12px] leading-[22px]    /* Mobile/Tablet */
              xl:text-[16px] xl:leading-[22px] /* Desktop */
              text-gray-800 mb-1 w-[42px] h-[11px]  /* Mobile */
              md:w-[42px]   md:h-[11px]                  /* Tablet */
              xl:w-[60px] xl:h-[17px]           /* Desktop */
              mx-auto">
              300+
            </p>
            <p className="font-poppins font-semibold 
              text-[12px] leading-[22px]    /* Mobile/Tablet */
              xl:text-[16px] xl:leading-[22px] /* Desktop */
              text-gray-600 
              w-[107px] h-[8px]  /* Mobile */
              md:w-[114px]       /* Tablet */
              xl:w-[151px] xl:h-[11px] /* Desktop */
              mx-auto">
              Expert Counsellors
            </p>
          </div>
          


          

          {/* Repeat similar structure for other stat items */}
          {/* Stat Item 2 */}
          <div className="text-center p-4">
            <div className="mx-auto mb-3 
              w-[30px] h-[30px]    
              md:w-[32px] md:h-[32px]  
              xl:w-[60px] xl:h-[60px]">
              <img 
                src={stationSectio2} 
                alt="Educational programs offered" 
                className="object-contain w-full h-full"
              />
            </div>
            <p className="font-poppins font-semibold 
              text-[12px] leading-[22px]    /* Mobile/Tablet */
              xl:text-[16px] xl:leading-[22px] /* Desktop */
              text-gray-800 mb-1 w-[42px] h-[11px]  /* Mobile */
              md:w-[42px]   md:h-[11px]                  /* Tablet */
              xl:w-[60px] xl:h-[17px]           /* Desktop */
              mx-auto">
              500+
            </p>
            <p className="font-poppins font-semibold 
              text-[12px] leading-[22px]    
              xl:text-[16px] xl:leading-[22px] 
              text-gray-600 
              w-[107px] h-[8px]  
              md:w-[114px]       
              xl:w-[151px] xl:h-[11px] 
              mx-auto">
              Programs
            </p>
          </div>

          {/* Stat Item 3 */}
          <div className="text-center p-4">
            <div className="mx-auto mb-3 
              w-[30px] h-[30px]    
              md:w-[32px] md:h-[32px]  
              xl:w-[60px] xl:h-[60px]">
              <img 
                src={stationSectio3} 
                alt="Students enrolled" 
                className="object-contain w-full h-full"
              />
            </div>
            <p className="font-poppins font-semibold 
              text-[12px] leading-[22px]    /* Mobile/Tablet */
              xl:text-[16px] xl:leading-[22px] /* Desktop */
              text-gray-800 mb-1 w-[42px] h-[11px]  /* Mobile */
              md:w-[42px]   md:h-[11px]                  /* Tablet */
              xl:w-[60px] xl:h-[17px]           /* Desktop */
              mx-auto">
              10,000+
            </p>
            <p className="font-poppins font-semibold 
              text-[12px] leading-[22px]    
              xl:text-[16px] xl:leading-[22px] 
              text-gray-600 
              w-[107px] h-[8px]  
              md:w-[114px]       
              xl:w-[151px] xl:h-[11px] 
              mx-auto">
              Enrolled Students
            </p>
          </div>

          {/* Stat Item 4 */}
          <div className="text-center p-4">
            <div className="mx-auto mb-3 
              w-[30px] h-[30px]    
              md:w-[32px] md:h-[32px]  
              xl:w-[60px] xl:h-[60px]">
              <img 
                src={stationSectio4} 
                alt="Partner universities" 
                className="object-contain w-full h-full"
              />
            </div>
            <p className="font-poppins font-semibold 
              text-[12px] leading-[22px]    /* Mobile/Tablet */
              xl:text-[16px] xl:leading-[22px] /* Desktop */
              text-gray-800 mb-1 w-[42px] h-[11px]  /* Mobile */
              md:w-[42px]   md:h-[11px]                  /* Tablet */
              xl:w-[60px] xl:h-[17px]           /* Desktop */
              mx-auto">
              100+
            </p>
            <p className="font-poppins font-semibold 
              text-[12px] leading-[22px]    
              xl:text-[16px] xl:leading-[22px] 
              text-gray-600 
              w-[107px] h-[8px]  
              md:w-[114px]       
              xl:w-[151px] xl:h-[11px] 
              mx-auto">
              Universities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;