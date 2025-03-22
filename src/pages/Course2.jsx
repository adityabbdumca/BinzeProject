import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";

const CoursesPage = () => {
  const activeFilters = ["Jain University", "MBA Distance", "4.0+ Rating", "1-2 years"];
  const courses = Array(10).fill({ // Sample data, replace with actual data
    title: "MBA Online",
    rating: 4.9,
    duration: "7 weeks",
    university: "JAIN"
  });

  const FilterSection = ({ title, children }) => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );

  const CourseCard = ({ title, rating, duration, university }) => (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="ml-1">{rating}</span>
        </div>
        <span className="bg-orange-200 text-orange-600 px-2 py-1 rounded-full text-xs">
          {duration}
        </span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="flex items-center mb-2">
        <img alt="University logo" className="mr-2" src="https://placehold.co/20x20" />
        <span>{university}</span>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">View</button>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl  font-bold mb-4">Courses</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center mb-4">
          {activeFilters.map((filter, index) => (
            <div key={index} className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full mr-2 mb-2">
              {filter}
              <FontAwesomeIcon icon={faTimes} className="ml-2 cursor-pointer" />
            </div>
          ))}
          <div className="ml-auto">
            <FontAwesomeIcon icon={faSearch} className="text-blue-600" />
          </div>
        </div>

        <div className="flex flex-wrap">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-2">Filter</h2>
              
              <FilterSection title="Mode of Education">
                <Checkbox label="Distance Learning" id="distance-learning" />
                <Checkbox label="Online" id="online" defaultChecked />
                <Checkbox label="Vocational Learning" id="vocational-learning" />
                <ShowMoreLink />
              </FilterSection>

              <FilterSection title="Programme">
                <Checkbox label="UG Courses" id="ug-courses" />
                <Checkbox label="PG Courses" id="pg-courses" defaultChecked />
                <Checkbox label="Advanced Diploma" id="advanced-diploma" />
                <Checkbox label="Diploma" id="diploma" />
                <Checkbox label="Certification" id="certification" />
                <ShowMoreLink />
              </FilterSection>

              <FilterSection title="Courses">
                <Checkbox label="Distance MBA" id="distance-mba" />
                <Checkbox label="Distance MCA" id="distance-mca" defaultChecked />
                <Checkbox label="MS Degree" id="ms-degree" />
                <Checkbox label="M.com" id="mcom" />
                <Checkbox label="M.A" id="ma" />
                <ShowMoreLink />
              </FilterSection>

              <FilterSection title="University">
                <Checkbox label="Jain University" id="jain-university" defaultChecked />
                <Checkbox label="Amity University" id="amity-university" />
                <Checkbox label="Indraprastha University" id="indraprastha-university" />
                <Checkbox label="IIT" id="iit" />
                <Checkbox label="MIT" id="mit" />
                <Checkbox label="NIT" id="nit" />
                <ShowMoreLink />
              </FilterSection>

              <FilterSection title="Duration">
                <div className="flex items-center mb-2">
                  <input className="mr-2" type="range" min="1" max="5" defaultValue="2" />
                  <span>1-5 Years</span>
                </div>
              </FilterSection>

              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Reset</button>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="w-full md:w-3/4 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Checkbox = ({ label, id, defaultChecked }) => (
  <div className="flex items-center mb-2">
    <input 
      type="checkbox" 
      id={id} 
      className="mr-2" 
      defaultChecked={defaultChecked}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

const ShowMoreLink = () => (
  <a className="text-blue-600" href="#">Show More</a>
);

export default CoursesPage;