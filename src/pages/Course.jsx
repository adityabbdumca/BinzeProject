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
  
  { id: 2, duration: "2 Years", title: "MBA", imgSrc: course2, category: "PG" },
  { id: 3, duration: "2 Years", title: "MBA", imgSrc: course3, category: "PG" },

  { id: 4, duration: "2 Years", title: "MS", imgSrc: course4, category: "PG" },
  { id: 5, duration: "3 Years", title: "BBA", imgSrc: course5, category: "UG" },
  { id: 6, duration: "3 Years", title: "BCA", imgSrc: course6, category: "UG" },
  { id: 7, duration: "3 Years", title: "B.Tech", imgSrc: course7, category: "UG" },
  { id: 8, duration: "3 Years", title: "BA", imgSrc: course5, category: "UG" },
  { id: 9, duration: "3 Years", title: "BALLB", imgSrc: course6, category: "UG" },
  { id: 10, duration: "3 Years", title: "BSC", imgSrc: course7, category: "UG" },
  { id: 11, duration: "2 Years", title: "MCA", imgSrc: course8, category: "PG" },
  { id: 12, duration: "3 Years", title: "B.Com", imgSrc: course9, category: "UG" },
  { id: 13, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 14, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 15, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 16, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 17, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 18, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 19, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 20, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 21, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 22, duration: "2 Years", title: "MBA", imgSrc: course1, category: "PG" },
  { id: 23, duration: "3 Years", title: "BCA", imgSrc: course6, category: "UG" },
  { id: 24, duration: "3 Years", title: "BCA", imgSrc: course6, category: "UG" },
  

  // ... keep other course entries as they are
];

const CourseCard = ({ duration, title, imgSrc }) => (
  <div className="relative flex flex-col items-center p-4 pt-5 border hover:shadow-lg transition-shadow
    border-[#A9A9A9] rounded-[16px] overflow-hidden
    w-[111.23px] h-[94.11px]
    md:w-[128.06px] md:h-[108.36px]
    lg:w-[169px] lg:h-[145px]">
    
    {/* Duration Badge */}
    <div className="absolute top-0 right-0 flex items-center justify-center bg-[#FF6E00]
      w-[40.81px] h-[11.85px] rounded-tr-[16px] rounded-bl-[16px]
      md:w-[46.98px] md:h-[13.64px]
      lg:w-[62px] lg:h-[18px]">
      <span className="font-poppins font-medium tracking-normal
        text-[6px] leading-[8px]
        md:text-[7px] md:leading-[13px]
        lg:text-[10px] lg:leading-[18px]">
        {duration}
      </span>
    </div>

    {/* Course Image */}
    <img 
      src={imgSrc} 
      alt={`${title} course`} 
      className="object-contain mb-1
        h-[20.4px] w-[20.4px]
        md:h-[23.49px] md:w-[23.49px]
        lg:h-[31px] lg:w-[31px]"
      loading="lazy"
    />

    {/* Course Title */}
    <h3 className="text-center font-poppins font-medium text-[#3D3D3D] mb-1
      text-[9px] leading-[14px] line-clamp-2
      
      md:pt-1
      lg:pt-3
      lg:text-[14px] lg:leading-[20px]">
      {title}
    </h3>

    {/* View Button */}
    <div className="w-full flex items-center justify-center mt-auto ">
      <button className="font-poppins font-medium bg-[#0056D2] text-white 
        hover:bg-blue-700 transition-colors rounded-[25px]
        w-[46.07px] h-[18.43px] text-[10px]  leading-[1]
        md:w-[53.02px] md:h-[21.15px] md:text-[12px] 
        lg:w-[70px] lg:h-[28px] ">
        View
      </button>
    </div>
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
  const [displayCount, setDisplayCount] = useState(21);
  const categories = ["All", "PG Course", "UG Course", "Advanced Diploma", "Diploma"];
// ... keep useEffect resize handler
useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) { // Mobile
        setDisplayCount(6);
      } else if (screenWidth >= 640 && screenWidth < 1024) { // Tablet
        setDisplayCount(10);
      } else { // Desktop
        setDisplayCount(21);
      }
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
    <div className="bg-white text-gray-800 py-[2%] lg:pl-[5%] top-[20px] lg:h-[803px] lg:w-[1441px]">
      <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
  <h1 className="w-[579px] h-[40px] font-poppins font-extrabold text-[28px] leading-[40px] text-center">
    Courses
  </h1>
</div>
{/* Mobile version */}
<div className="flex justify-center items-center md:hidden">
  <p className="w-[328px] text-[#6D6D6D] font-poppins font-medium text-[8px] leading-[24px] tracking-normal ">
    In-demand courses across multiple domains. Top-rated courses in diverse.
  </p>
</div>

{/* Tablet/Desktop version */}
<div className="hidden md:flex justify-center ">
  <p className="w-[735px] h-[24px] text-[#6D6D6D] font-poppins md:ml-3 font-medium text-[18px] leading-[24px] tracking-normal">
    In-demand courses across multiple domains. Top-rated courses in diverse.
  </p>
</div>


        {/* Enhanced Filter Buttons */}
        <div className="overflow-x-auto lg:mt-7 pb-6 scrollbar-hide   ">
  <div className="flex space-x-4 min-w-max px-2 lg:ml-10">
    <div className="border-b-2 ">
    {categories.map(category => (
      <button
        key={category}
        className={`px-2 font-poppins font-medium text-center tracking-normal 
          text-[10px] leading-[40px] 
          md:text-[14px] 
          lg:text-[16px] transition-colors whitespace-nowrap border-b-2
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
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7   lg:gap-6 md:gap-5 gap-9 mr-2 pl-[1%] pr-[3%] ">
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