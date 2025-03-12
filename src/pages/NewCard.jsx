import React from "react";

const NewCard = ({ imageSrc, altText, title, date, description, titleColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
      <img src={imageSrc} alt={altText} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className={`text-2xl font-semibold ${titleColor}`}>{title}</h2>
        <p className="text-gray-500 text-sm mt-1">{date}</p>
        <p className="text-gray-700 mt-3">{description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewCard;
