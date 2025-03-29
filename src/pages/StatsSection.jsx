import stationSectio1 from '../assets/image/stationSectio1.png';
import stationSectio2 from '../assets/image/stationSectio2.png';
import stationSectio3 from '../assets/image/stationSectio3.png';
import stationSectio4 from '../assets/image/stationSectio4.png';

const StatsSection = () => {
  return (
    <div className="bg-[#F3F7FF] py-8 w-full mt-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8">
          {/* Stat Item 1 */}
          <div className="flex flex-col items-center relative pb-4 md:pb-0">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-[#0056D2]  md:block"></div>
            <div className="mb-4 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14">
              <img src={stationSectio1} alt="Expert counsellors" className="object-contain w-full h-full" />
            </div>
            <p className="font-poppins font-semibold text-xl lg:text-2xl text-gray-800 mb-1">300+</p>
            <p className="font-poppins font-medium text-sm md:text-base text-gray-600">Expert Counsellors</p>
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col items-center relative pb-4 md:pb-0">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-[#0056D2] hidden md:block"></div>
            <div className="mb-4 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14">
              <img src={stationSectio2} alt="Programs" className="object-contain w-full h-full" />
            </div>
            <p className="font-poppins font-semibold text-xl lg:text-2xl text-gray-800 mb-1">500+</p>
            <p className="font-poppins font-medium text-sm md:text-base text-gray-600">Programs</p>
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col items-center relative pb-4 md:pb-0">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-[#0056D2]  md:block"></div>
            <div className="mb-4 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14">
              <img src={stationSectio3} alt="Students" className="object-contain w-full h-full" />
            </div>
            <p className="font-poppins font-semibold text-xl lg:text-2xl text-gray-800 mb-1">10,000+</p>
            <p className="font-poppins font-medium text-sm md:text-base text-gray-600">Enrolled Students</p>
          </div>

          {/* Stat Item 4 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14">
              <img src={stationSectio4} alt="Universities" className="object-contain w-full h-full" />
            </div>
            <p className="font-poppins font-semibold text-xl lg:text-2xl text-gray-800 mb-1">100+</p>
            <p className="font-poppins font-medium text-sm md:text-base text-gray-600">Universities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;