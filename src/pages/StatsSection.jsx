import stationSectio1 from '../assets/image/stationSectio1.png';
import stationSectio2 from '../assets/image/stationSectio2.png';
import stationSectio3 from '../assets/image/stationSectio3.png';
import stationSectio4 from '../assets/image/stationSectio4.png';

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 border border-gray-300 p-4">
          {/* Stat Item 1 */}
          <div className="text-center border p-4">
            <div className="mx-auto mb-3 w-16 h-16">
              <img src={stationSectio1} alt="Expert counsellors available" className="object-contain w-full h-full" />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-1">300+</p>
            <p className="text-sm text-gray-600">Expert Counsellors</p>
          </div>

          {/* Stat Item 2 */}
          <div className="text-center border p-4">
            <div className="mx-auto mb-3 w-16 h-16">
              <img src={stationSectio2} alt="Educational programs offered" className="object-contain w-full h-full" />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-1">500+</p>
            <p className="text-sm text-gray-600">Programs</p>
          </div>

          {/* Stat Item 3 */}
          <div className="text-center border p-4">
            <div className="mx-auto mb-3 w-16 h-16">
              <img src={stationSectio3} alt="Students enrolled" className="object-contain w-full h-full" />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-1">10,000+</p>
            <p className="text-sm text-gray-600">Enrolled Students</p>
          </div>

          {/* Stat Item 4 */}
          <div className="text-center border p-4">
            <div className="mx-auto mb-3 w-16 h-16">
              <img src={stationSectio4} alt="Partner universities" className="object-contain w-full h-full" />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-1">100+</p>
            <p className="text-sm text-gray-600">Universities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;