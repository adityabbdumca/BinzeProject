import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="bg-gray-100 s-screen flex justify-center items-center">
      <div className="m-full max-w-6xl mx-auto">
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-blue-600 text-white p-8 md:w-1/2 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Boost Your Career with Industry-Recognized Skills
              </h1>
              <p className="text-lg mb-6">
                Flexible, affordable courses designed to help you achieve your goals, whether you're at home, on the go, or anywhere in between.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg">
                  Suggest Universities
                </button>
                <button className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded-lg">
                  Browse All Courses
                </button>
              </div>
            </div>
            <div className="relative md:w-1/2 flex items-center justify-center p-0">
              <img
                src="https://storage.googleapis.com/a1aa/image/3Kd006AUoGTi4aEjCJYVQxipykG1Q3_IRutkpj2Eu3c.jpg"
                alt="Graduation cap and a happy student with books and headphones"
                className="w-full m-full object-cover"
                width="300"
                height="300"
              />
            </div>
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button className="bg-gray-300 text-gray-600  p-2 rounded-full">
              <i className="fas fa-chevron-left"><FaChevronLeft></FaChevronLeft></i>
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button className="bg-gray-300 text-gray-600 p-2 rounded-full">
              <i className="fas fa-chevron-right"><FaChevronRight></FaChevronRight></i>
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <span className="block w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner