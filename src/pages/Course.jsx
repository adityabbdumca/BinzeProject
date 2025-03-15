import { useState, useEffect } from "react";
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
import course13 from "../assets/image/course13.png";
import course15 from "../assets/image/course15.png";
import course20 from "../assets/image/course20.png";
import course21 from "../assets/image/course21.png";

const courses = [
  { id: 1, duration: "2 Years", title: "Distance MBA", imgSrc: course1, category: "PG" },
  { id: 2, duration: "2 Years", title: "Online MBA", imgSrc: course2, category: "PG" },
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

];

const CourseCard = ({ duration, title, imgSrc }) => (
  <div className="border rounded-lg p-4 relative w-full">
    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-bl-lg">
      {duration}
    </div>
    <img 
      src={imgSrc} 
      alt={title} 
      className="mx-auto mb-4 h-auto object-cover w-16"
      width="64" 
      height="64" 
    />
    <h2 className="text-center font-semibold mb-2 text-sm md:text-base">{title}</h2>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-full mx-auto block text-sm md:text-base">
      View
    </button>
  </div>
);

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const categories = ["All", "PG", "UG", "Advanced Diploma", "Diploma"];

  const filteredCourses = selectedCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 4);

  return (
    <div className="bg-white text-gray-800 py-[2%]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Courses</h1>
        <p className="text-center text-gray-500 mb-8">
          In-demand courses across multiple domains. Top-rated courses in diverse areas.
        </p>

        {/* Filter Buttons */}
        <div className="flex mb-8 overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-4 border-b-2 border-gray-200 pb-1">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer pb-2 px-1 ${
                  selectedCategory === category 
                    ? "border-b-4 border-blue-500 text-blue-500" 
                    : "text-gray-500"
                }`}
                onClick={() => {
                  setSelectedCategory(category === "All" ? "All" : category);
                  setShowAll(false); // Reset to show 4 when category changes
                }}
              >
                {category === "All" ? "All Courses" : `${category} Courses`}
              </li>
            ))}
          </ul>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              No courses available.
            </p>
          )}
        </div>

        {/* Conditionally show "View All" if there are more than 4 courses */}
        {filteredCourses.length > 4 && (
          <div className="text-center mt-8">
            <a 
              href="#" 
              className="text-blue-600 font-semibold hover:underline"
              onClick={(e) => {
                e.preventDefault();
                setShowAll(true); // Show all courses when clicked
              }}
            >
              View All <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;