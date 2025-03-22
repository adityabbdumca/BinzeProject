import React from "react";

const NewCard = ({ imageSrc, altText, title, date, description, titleColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg  transform hover:scale-105 transition duration-300">
      <img src={imageSrc} alt={altText} className="" />
      <div className="p-4">
        <h2 className={`text-2xl font-semibold ${titleColor}`}>{title}</h2>
        <p className="text-gray-500 text-sm mt-1">{date}</p>
        <p className="text-gray-700 mt-3">{description}</p>
       
      </div>
    </div>
  );
};

export default NewCard;
