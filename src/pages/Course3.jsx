import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
const Course3 = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Courses</h1>
      <div className="flex flex-wrap items-center justify-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Jain University
            <FontAwesomeIcon icon={faTimes} className="ml-1" />
          </span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            MBA Distance
            <FontAwesomeIcon icon={faTimes} className="ml-1" />
          </span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            4.0+ Rating
            <FontAwesomeIcon icon={faTimes} className="ml-1" />
          </span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            1-2 years
            <FontAwesomeIcon icon={faTimes} className="ml-1" />
          </span>
        </div>
        <button className="ml-4 text-blue-600">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/4 p-2">
          <div className="bg-white p-4 rounded-lg shadow md:w-[278px] md:h-[1283px] lg:w-[228px] lg:h-[1283px] ">
            <button className="w-full bg-blue-100 text-blue-600 py-2 rounded mb-4">Filter</button>
            <div className="mb-4  ">
              <h2 className="font-bold mb-2">Mode of Education</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">Distance Learning</span>
                  <span className="ml-auto text-gray-500">(159)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">Online</span>
                  <span className="ml-auto text-gray-500">(38)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Vocational Learning</span>
                  <span className="ml-auto text-gray-500">(38)</span>
                </label>
                <button className="text-blue-600">
                  Show More
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">Programme</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">UG Courses</span>
                  <span className="ml-auto text-gray-500">(159)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">PG Courses</span>
                  <span className="ml-auto text-gray-500">(38)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">Advanced Diploma</span>
                  <span className="ml-auto text-gray-500">(50)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Diploma</span>
                  <span className="ml-auto text-gray-500">(76)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Certification</span>
                  <span className="ml-auto text-gray-500">(15)</span>
                </label>
                <button className="text-blue-600">
                  Show More
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">Courses</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">Distance MBA</span>
                  <span className="ml-auto text-gray-500">(159)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">Distance MCA</span>
                  <span className="ml-auto text-gray-500">(30)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">MS Degree</span>
                  <span className="ml-auto text-gray-500">(50)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">MCom</span>
                  <span className="ml-auto text-gray-500">(15)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">MA</span>
                  <span className="ml-auto text-gray-500">(15)</span>
                </label>
                <button className="text-blue-600">
                  Show More
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">University</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">Jain University</span>
                  <span className="ml-auto text-gray-500">(38)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Amity University</span>
                  <span className="ml-auto text-gray-500">(50)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Indraprastha University</span>
                  <span className="ml-auto text-gray-500">(30)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">IIT</span>
                  <span className="ml-auto text-gray-500">(30)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">MIT</span>
                  <span className="ml-auto text-gray-500">(15)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">NIT</span>
                  <span className="ml-auto text-gray-500">(15)</span>
                </label>
                <button className="text-blue-600">
                  Show More
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">Duration</h2>
              <div className="flex items-center space-x-2">
                <input type="range" className="w-full" min="1" max="60" defaultValue="1" />
                <input type="range" className="w-full" min="1" max="60" defaultValue="60" />
              </div>
              <div className="flex justify-between text-gray-500 text-sm mt-2">
                <span>1 Month</span>
                <span>5 Years</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="w-full bg-blue-600 text-white py-2 rounded">Apply</button>
              <button className="w-full bg-gray-200 text-gray-600 py-2 rounded">Reset</button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow relative">
                <span className="absolute top-2 right-2 bg-orange-200 text-orange-600 px-2 py-1 rounded">
                  {index % 2 === 0 ? '2 Years' : '3 Years'}
                </span>
                <img
                  src="https://storage.googleapis.com/a1aa/image/s3Notm65OlmIlVedUovkKwpxShHJk9X-D10jM49kNSc.jpg"
                  alt="Course Image"
                  className="mx-auto mb-4"
                  width="100"
                  height="100"
                />
                <h3 className="text-center font-bold mb-2">MBA Online</h3>
                <button className="w-full bg-blue-600 text-white py-2 rounded">View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Course3