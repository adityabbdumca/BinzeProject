import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
    specialization: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4 sm:p-6 font-poppins">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-6xl">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <Link 
            to="/" 
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faTimes} className="text-xl sm:text-2xl" />
          </Link>
        </div>

        <div className="text-center mb-6 md:mb-8">
          <p className="text-blue-600 font-semibold text-lg md:text-xl lg:text-2xl mb-2 leading-tight">
            Top Online MBA universities comparison to placement support everything at one place
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <div className="flex flex-col pl-[12%] md:flex-row gap-6 md:gap-8">
          {/* Form Section */}
          <div className="md:w-1/2 space-y-4 md:space-y-6">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {['Full Name', 'Email ID', 'Mobile Number', 'Date of Birth'].map((label, index) => {
                const name = label.toLowerCase().replace(/ /g, '');
                return (
                  <div key={index}>
                    <label htmlFor={name} className="block text-gray-700 text-sm md:text-base font-medium mb-2">
                      {label} *
                    </label>
                    <input
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                               outline-none transition-all placeholder-gray-400"
                      placeholder={`Enter Your ${label}`}
                      type={label.includes('Email') ? 'email' : 'text'}
                    />
                  </div>
                );
              })}

              {/* Gender Select */}
              <div>
                <label htmlFor="gender" className="block text-gray-700 text-sm md:text-base font-medium mb-2">
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                            outline-none cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Specialization Select */}
              <div>
                <label htmlFor="specialization" className="block text-gray-700 text-sm md:text-base font-medium mb-2">
                  Specialization *
                </label>
                <select
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                            outline-none cursor-pointer"
                >
                  <option value="">Not selected Yet</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Data Science">Data Science</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white 
                          font-semibold py-3 rounded-lg transition-colors duration-200 
                          transform hover:scale-[1.02]"
              >
                Sign Up
              </button>

              {/* Login Link */}
              <p className="text-center text-gray-600 text-sm md:text-base">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>

          {/* Features Section */}
          <div className="md:w-1/2 md:border-l md:border-gray-200 md:pl-6 lg:pl-8 pt-4 md:pt-0">
            <ul className="space-y-3 md:space-y-4">
              {[
                '100+ Universities',
                'Quick Loan facility',
                'Job + Internship Portal',
                '30X comparison factors',
                'Post Admission Support',
                'Free expert consultation',
                'CV Exclusive Community'
              ].map((feature) => (
                <li 
                  key={feature}
                  className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <FontAwesomeIcon 
                    icon={faCheckCircle} 
                    className="text-green-500 text-lg mt-1 mr-3 flex-shrink-0" 
                  />
                  <span className="text-gray-700 text-base md:text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;