import course1 from '../assets/image/course1.png'
import course2 from '../assets/image/course2.png'
import course3 from '../assets/image/course3.png'
import course4 from '../assets/image/course4.png'
import course5 from '../assets/image/course5.png'
import course6 from '../assets/image/course6.png'
import course7 from '../assets/image/course7.png'
import course8 from '../assets/image/course8.png'
import course9 from '../assets/image/course9.png'
import course10 from '../assets/image/course10.png'
import course11 from '../assets/image/course11.png'
import course12 from '../assets/image/course12.png'
import course13 from '../assets/image/course13.png'
import course15 from '../assets/image/course15.png'
import course20 from '../assets/image/course20.png'
import course21 from '../assets/image/course21.png'
const courses = [
  { id: 1, duration: '2 Years', title: 'Distance MBA', imgSrc: course1},
  { id: 2, duration: '2 Years', title: 'Online MBA ', imgSrc: course2},
  { id: 3, duration: '2 Years', title: '1 Year MBA', imgSrc: course3},
  { id: 4, duration: '2 Years', title: 'MS Degree ', imgSrc: course4},
  { id: 5, duration: '2 Years', title: 'Distance MBA', imgSrc: course5},
  { id: 6, duration: '2 Years', title: 'Distance MBA', imgSrc: course6},
  { id: 7, duration: '2 Years', title: 'Distance MCA', imgSrc: course7},
  { id: 8, duration: '3 Years', title: 'Distance MBA', imgSrc: course8 },
  { id: 9, duration: '3 Years', title: 'Distance MBA', imgSrc: course8 },
  { id: 10, duration: '2 Years', title: 'Distance MBA', imgSrc: course9 },
  { id: 11, duration: '2 Years', title: 'Distance MBA', imgSrc: course10 },
  { id: 12, duration: '2 Years', title: 'Distance MBA', imgSrc: course11 },
  { id: 13, duration: '2 Years', title: 'Distance MBA', imgSrc: course12 },
  { id: 14, duration: '2 Years', title: 'Distance MBA', imgSrc: course13 },
  { id: 15, duration: '2 Years', title: 'Distance MBA', imgSrc: course15},
  { id: 16, duration: '2 Years', title: 'Distance MBA', imgSrc: course15 },
 { id: 17, duration: '2 Years', title: 'Distance MBA', imgSrc: course15 },
 { id: 18, duration: '2 Years', title: 'Distance MBA', imgSrc: course15 },
 { id: 19, duration: '2 Years', title: 'Distance MBA', imgSrc: course15 },
 { id: 20, duration: '2 Years', title: 'Distance MBA', imgSrc: course20 },
 { id: 21, duration: '2 Years', title: 'Distance MBA', imgSrc: course21 }
];

const CourseCard = ({ duration, title, imgSrc }) => (
  <div className="border rounded-lg p-4 relative ">
    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-bl-lg">
      {duration}
    </div>
    <img src={imgSrc} alt={`Icon representing ${title}`} className="mx-auto mb-4" width="40" height="40" />
    <h2 className="text-center font-semibold mb-2">{title}</h2>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-full mx-auto block">View</button>
  </div>
);

const Courses = () => {
  return (
    <div className="bg-white text-gray-800 py-[2%]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Courses</h1>
        <p className="text-center text-gray-500 mb-8">
          In-demand courses across multiple domains Top-rated courses in diverse areas
        </p>
        <div className="flex mb-8 bg-white">
          <ul className="flex space-x-4">
            <li className="text-blue-600 border-b-2 border-blue-600 pb-2">All</li>
            <li className="text-gray-500">PG Courses</li>
            <li className="text-gray-500">UG Courses</li>
            <li className="text-gray-500">Advanced Diploma</li>
            <li className="text-gray-500">Diploma</li>
            <li className="text-gray-500">Certification</li>
          </ul>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {courses.slice(0, window.innerWidth < 1024 ? 6 : courses.length).map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a className="text-blue-600" href="#">
            View All <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};


export default Courses;
