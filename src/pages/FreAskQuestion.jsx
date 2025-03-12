import { useState, useEffect } from "react";

const FreAskQuestion = () => {
  const faqs = [
    { question: "Do you accept Paypal?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "What is SLA Guarantee?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "This is a dummy FAQ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "This is a dummy FAQ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "This is a dummy FAQ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
    { question: "This is a dummy FAQ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-100 min-m-screen">
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-blue-500 text-lg">FAQs</h2>
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(isMobile ? faqs.slice(0, 4) : faqs).map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreAskQuestion;
