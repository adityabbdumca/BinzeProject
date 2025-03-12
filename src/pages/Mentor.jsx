import metor1 from "../assets/image/metor1.png";
import mentor2 from "../assets/image/mentor2.png";
import mento3 from "../assets/image/mento3.png";
import mentor4 from "../assets/image/mentor4.png";

const mentors = [
  { image: metor1 },
  { image: mentor2 },
  { image: mento3 },
  { image: mentor4 },
];

const MentorCard = ({ mentor }) => (
  <div className="rounded-lg shadow-lg min-w-[250px] sm:min-w-0">
    <div className="relative">
      <img
        src={mentor.image}
        className="w-full h-auto object-cover"
        alt="Mentor"
      />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-3/4">
        <button className="bg-blue-50 text-blue-400 text-sm font-semibold px-6 py-2 rounded-full border-2 border-blue-400 hover:bg-blue-100 transition-colors shadow-md">
          Consult Now
        </button>
      </div>
    </div>
  </div>
);

const Mentor = () => (
  <div className="bg-blue-50 min-m-screen py-12">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Pick your Mentor</h1>
        <p className="text-gray-500">
          College Drishti has a team of expert counsellors ready to guide you through their experience of guiding 100s of students.
        </p>
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="sm:hidden flex gap-4 overflow-x-auto pb-6">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>

      {/* Tablet & Desktop: Grid Layout */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
          Suggest me a Mentor
        </button>
      </div>
    </div>
  </div>
);

export default Mentor;
