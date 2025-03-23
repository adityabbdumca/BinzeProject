import { useState } from 'react';

const FreqAskQuestion = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const faqs = [
    { question: "Do you accept Paypal?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "What is SLA Guarantee?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "How do I track my order?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "What payment methods do you accept?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "What is your return policy?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "How can I contact support?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
  ];

  return (
    <div className="bg-gray-100 font-poppins py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-blue-500 text-lg md:text-xl mb-2">
            FAQs
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Desktop-only (6 cards) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.slice(0, isExpanded ? faqs.length : 6).map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                tabIndex={0}
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet-only (4 cards) */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.slice(0, isExpanded ? faqs.length : 4).map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                tabIndex={0}
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FreqAskQuestion;