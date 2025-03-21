import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import course1 from "../assets/image/course1.png";
import course2 from "../assets/image/course2.png";
import course3 from "../assets/image/course3.png";
import course4 from "../assets/image/course4.png";
import course5 from "../assets/image/course5.png";
import course6 from "../assets/image/course6.png";
import course7 from "../assets/image/course7.png";
import course8 from "../assets/image/course8.png";
import course9 from "../assets/image/course9.png";
import course10 from "../assets/image/course10.png";
import course11 from "../assets/image/course11.png";
import course12 from "../assets/image/course12.png";

// ... keep other course imports as they are

const courses = [
  { id: 1, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  
  { id: 2, duration: "2 Years", title: "2 Year MBA", imgSrc: course2, category: "PG" },
  { id: 3, duration: "2 Years", title: "1 Year MBA", imgSrc: course3, category: "PG" },

  { id: 4, duration: "2 Years", title: "MS Degree", imgSrc: course4, category: "PG" },
  { id: 5, duration: "3 Years", title: "BBA", imgSrc: course5, category: "UG" },
  { id: 6, duration: "3 Years", title: "BCA", imgSrc: course6, category: "UG" },
  { id: 7, duration: "3 Years", title: "B.Tech", imgSrc: course7, category: "UG" },
  { id: 8, duration: "3 Years", title: "BA", imgSrc: course5, category: "UG" },
  { id: 9, duration: "3 Years", title: "BALLB", imgSrc: course6, category: "UG" },
  { id: 10, duration: "3 Years", title: "BSC", imgSrc: course7, category: "UG" },
  { id: 11, duration: "2 Years", title: "Distance MCA", imgSrc: course8, category: "PG" },
  { id: 12, duration: "3 Years", title: "B.Com", imgSrc: course9, category: "UG" },

  // ... keep other course entries as they are
];

const CourseCard = ({ duration, title, imgSrc }) => (
  <div className="border pt-5 rounded-lg p-4 relative w-full flex flex-col items-center hover:shadow-lg transition-shadow">
    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-1 py-1 rounded-bl-lg">
      {duration}
    </div>
    <img 
      src={imgSrc} 
      alt={`${title} course`} 
      className="w-[20.4px] h-[20.4px] top-[881.85px] left-[189.09px] object-contain mb-4"
      loading="lazy"
    />
    <h2 className="text-center font-semibold mb-2 text-sm md:text-base">{title}</h2>
    <button className="   bg-blue-600 text-white px-4 py-2  rounded-full text-sm md:text-base hover:bg-blue-700 transition-colors">
      View 
    </button>
  </div>
);

CourseCard.propTypes = {
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(10);
  const categories = ["All", "PG Course", "UG Course", "Advanced Diploma", "Diploma"];
// ... keep useEffect resize handler
  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth < 640 ? 6 : 10);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredCourses = courses.filter(course => {
    if (selectedCategory === "All") return true;
    const categoryMap = {
      "PG Course": "PG",
      "UG Course": "UG",
      "Advanced Diploma": "ADV_DIPLOMA",
      "Diploma": "DIPLOMA"
    };
    return course.category === categoryMap[selectedCategory];
  });


  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, displayCount);

  return (
    <div className="bg-white text-gray-800 py-[2%]  pl-[3%] pr-[3%] ">
      <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
  <h1 className="w-[579px] h-[40px] font-poppins font-extrabold text-[28px] leading-[40px] text-center">
    Courses
  </h1>
</div>
{/* Mobile version */}
<div className="flex justify-center items-center md:hidden">
  <p className="w-[335px] text-[#6D6D6D] font-poppins font-medium text-[8px] leading-[24px] tracking-normal ">
    In-demand courses across multiple domains. Top-rated courses in diverse.
  </p>
</div>

{/* Tablet/Desktop version */}
<div className="hidden md:flex justify-center ">
  <p className="w-[735px] h-[24px] text-[#6D6D6D] font-poppins font-medium text-[18px] leading-[24px] tracking-normal">
    In-demand courses across multiple domains. Top-rated courses in diverse.
  </p>
</div>


        {/* Enhanced Filter Buttons */}
        <div className="overflow-x-auto mt-3 pb-6 scrollbar-hide">
  <div className="flex space-x-4 min-w-max px-2  ">
    <div className="border-b-2">
    {categories.map(category => (
      <button
        key={category}
        className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap border-b-2
          ${
            selectedCategory === category
              ? "text-[#0056D2] border-[#0056D2]"  // Active state: Text and small border of the same color
              : "text-gray-600 border-transparent hover:border-gray-400"  // Inactive state: Only bottom border
          }`}
        onClick={() => {
          setSelectedCategory(category);
          setShowAll(false);
        }}
      >
        {category}
        
      </button>
    ))}
  </div>
  </div>
</div>



        {/* Courses Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 pl-[3%] pr-[3%] ">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))
          ) : (
            <p className="font-poppins text-center col-span-full text-gray-500 py-8">
              No courses found in {selectedCategory.toLowerCase()} category.
            </p>
          )}
        </div>

        {/* View All Button */}
        {!showAll && filteredCourses.length > displayCount && (
          <div className="text-center mt-8">
            <button
              className="font-poppins text-blue-600 font-semibold hover:underline bg-transparent border-none cursor-pointer"
              onClick={() => setShowAll(true)}
            >
              View All Courses →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;