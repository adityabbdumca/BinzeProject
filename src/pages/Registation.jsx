import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
    specialization: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    const currentDate = new Date();
    const dobDate = new Date(formData.dob);

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile Number is required';
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number (10 digits required)';
    }
    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required';
    } else if (dobDate > currentDate) {
      newErrors.dob = 'Date cannot be in the future';
    }
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.specialization || formData.specialization === '') 
      newErrors.specialization = 'Specialization is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Restrict mobile number to digits only
    if (name === 'mobile' && !/^\d*$/.test(value)) return;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      // Reset form after success
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        dob: '',
        gender: '',
        specialization: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => setSubmitSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4 sm:p-6 font-poppins">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-6xl relative">
        {submitSuccess && (
          <div className="absolute inset-0 bg-green-50/90 flex items-center justify-center rounded-2xl">
            <div className="text-center">
              <FontAwesomeIcon 
                icon={faCheckCircle} 
                className="text-green-600 text-4xl mb-4"
              />
              <h2 className="text-2xl font-bold text-green-800">Registration Successful!</h2>
            </div>
          </div>
        )}

        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <Link 
            to="/" 
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label="Close registration form"
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

        <div className="flex flex-col pl-[7%] md:flex-row gap-6 md:gap-8">
          {/* Form Section */}
          <div className="md:w-1/2 space-y-4 md:space-y-6">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} noValidate>
              {[
                { label: 'Full Name', name: 'fullName', type: 'text' },
                { label: 'Email ID', name: 'email', type: 'email' },
                { label: 'Mobile Number', name: 'mobile', type: 'tel' },
                { label: 'Date of Birth', name: 'dob', type: 'date' },
              ].map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-gray-700 text-sm md:text-base font-medium mb-2">
                    {field.label} *
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${
                      errors[field.name] ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    placeholder={`Enter Your ${field.label}`}
                    type={field.type}
                    aria-invalid={!!errors[field.name]}
                    aria-describedby={`${field.name}-error`}
                  />
                  {errors[field.name] && (
                    <p id={`${field.name}-error`} className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

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
                  className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${
                    errors.gender ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer`}
                  aria-invalid={!!errors.gender}
                  aria-describedby="gender-error"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <p id="gender-error" className="text-red-500 text-sm mt-1">
                    {errors.gender}
                  </p>
                )}
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
                  className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${
                    errors.specialization ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer`}
                  aria-invalid={!!errors.specialization}
                  aria-describedby="specialization-error"
                >
                  <option value="">Not selected Yet</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Data Science">Data Science</option>
                </select>
                {errors.specialization && (
                  <p id="specialization-error" className="text-red-500 text-sm mt-1">
                    {errors.specialization}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white 
                          font-semibold py-3 rounded-lg transition-all duration-200 
                          disabled:opacity-50 disabled:cursor-not-allowed
                          relative"
              >
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon 
                      icon={faSpinner} 
                      className="animate-spin absolute left-4 top-1/2 -translate-y-1/2"
                    />
                    <span>Processing...</span>
                  </>
                ) : (
                  'Sign Up'
                )}
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