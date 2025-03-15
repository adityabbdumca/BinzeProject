import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const LogPage = () => {
  const [mobile, setMobile] = React.useState('');
  const [otp, setOtp] = React.useState('');

  const features = [
    '100+ Universities',
    'Quick Loan facility',
    'Job + Internship Portal',
    '30X comparison factors',
    'Post Admission Support',
    'Free expert consultation',
    'CV Exclusive Community'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4 md:p-8 font-poppins">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md md:max-w-xl p-6 md:p-8 transition-all">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-blue-600 font-semibold text-sm md:text-base leading-tight">
            Top Online MBA universities comparison to placement support everything at one place
          </h2>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 md:mb-6">
            <label htmlFor="mobile" className="block text-gray-700 text-sm md:text-base mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter Your Mobile Number"
              className="w-full px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm md:text-base"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="text-center mb-4 md:mb-6">
            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm md:text-base transition-colors">
              Get OTP
            </button>
          </div>

          <div className="mb-6 md:mb-8">
            <label htmlFor="otp" className="block text-gray-700 text-sm md:text-base mb-2">
              Enter OTP *
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm md:text-base"
              required
            />
          </div>

          <div className="text-center mb-6">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 md:py-3 rounded-full w-full md:w-auto text-sm md:text-base transition-colors">
              Log In
            </button>
          </div>
        </form>

        {/* Features List */}
        <div className="mt-6 md:mt-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700 text-sm md:text-base">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-base md:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm md:text-base">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogPage;
