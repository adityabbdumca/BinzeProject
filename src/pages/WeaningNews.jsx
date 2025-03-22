import React, { useState, useEffect } from "react";
import win1 from "../assets/image/win1.png";
import win2 from "../assets/image/win2.png";
import win3 from "../assets/image/win3.png";
import NewCard from "./NewCard";
import winNewsMobile from "../assets/image/winNewsMobile.png"

const WeaningNews = () => {
  const newsCards = [
    {
      imageSrc: win1,
      altText: "Illustration of a laptop, globe, and certificate",
      title: "Best LearnPress WordPress Theme Collection For 2023",
      date: "Jan 24, 2023",
      description: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
      imageSrc: win2,
      altText: "Person working on a laptop in an office",
      title: "Top WordPress Themes for Education",
      date: "Feb 10, 2023",
      description: "Discover the best education WordPress themes for online courses..."
    },
    {
      imageSrc: win3,
      altText: "Person holding a tablet in a modern office",
      title: "Latest Trends in E-Learning",
      date: "Mar 15, 2023",
      description: "E-learning trends you should know to stay ahead in the digital world..."
    },
  ];
return (
    <div className="bg-gray-100 py-[2%]">
     <div className="container mx-auto mt-10">
        <div className="text-center ">
          <h1 className="text-3xl font-bold">We've Been On News</h1>
          <p className="text-gray-500">Find us in the news</p>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden relative -mt-24 z-10"> {/* -mt-24 (96px) से और ऊपर */}
  <div className="w-full overflow-hidden">
    <img 
      src={winNewsMobile} 
      alt="हमारी मीडिया कवरेज"
      className="w-screen h-auto object-cover scale-105 transform transition-transform -translate-y-4" /* और 16px ऊपर */
    />
  </div>
</div>

        {/* Tablet View */}
        <div className="hidden md:flex xl:hidden px-4 overflow-hidden  justify-center">
  <div className="flex gap-[12px] max-w-[1290px] mx-auto py-4 transform transition-transform">
    {newsCards.map((card, index) => (
      <div 
        key={index}
        className="flex-shrink-0 w-[322px] h-[368px] border rounded-lg shadow-sm overflow-hidden transform transition-transform "
      >
        <NewCard
          imageSrc={card.imageSrc}
          altText={card.altText}
          title={card.title}
          date={card.date}
          description={card.description}
          titleColor="text-gray-800"
          imageClass="w-full h-full object-cover"
          cardClass="p-4 space-y-2"
        />
      </div>
    ))}
  </div>
</div>

        {/* Desktop View */}
        <div className="hidden xl:grid grid-cols-3 gap-6 px-4 sm:px-0 lg:px-16 lg:pt-6 ">
          {newsCards.map((card, index) => (
            <NewCard
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              date={card.date}
              description={card.description}
              titleColor=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeaningNews;