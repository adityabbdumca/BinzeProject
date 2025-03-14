import React from 'react'

const LoginPage = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
      <div className="flex justify-end">
        <button className="text-gray-500 text-xl">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <h2 className="text-center text-blue-600 font-semibold mb-4">
        Top Online MBA universities comparison to placement support everything at one place
      </h2>
      <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700">
            Mobile Number*
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter Your Mobile Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex justify-center mb-4">
          <button type="button" className="bg-blue-600 text-white px-6 py-2 rounded-full">
            Get OTP
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-700">
            Enter OTP*
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="Enter OTP"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex justify-center mb-4">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full">
            Log In
          </button>
        </div>
        <div className="text-center">
          <p className="text-gray-700">
            Already have an account? <a href="#" className="text-blue-600">Log In</a>
          </p>
        </div>
      </form>
      <div className="mt-6">
        <ul className="space-y-2">
          <li className="flex items-center text-gray-700">
            <i className="fas fa-check-circle text-green-500 mr-2"></i> 100+ Universities
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fas fa-check-circle text-green-500 mr-2"></i> Quick Loan facility
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fas fa-check-circle text-green-500 mr-2"></i> Job + Internship Portal
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fas fa-check-circle text-green-500 mr-2"></i> 30X comparison factors
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fas fa-check-circle text-green-500 mr-2"></i> Post Admission Support
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fas fa-check-circle text-green-500 mr-2"></i> Free expert consultation
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fas fa-check-circle text-green-500 mr-2"></i> CV Exclusive Community
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default LoginPage