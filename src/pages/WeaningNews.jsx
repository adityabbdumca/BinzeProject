import React from "react";
import win1 from "../assets/image/win1.png";
import win2 from "../assets/image/win2.png";
import win3 from "../assets/image/win3.png";
import NewCard from "./NewCard";

const WeaningNews = () => {
  return (
    <div className="bg-gray-100 py-[2%]">
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">We've Been On News</h1>
          <p className="text-gray-500">Find us in the news</p>
        </div>

        {/* Mobile View: Sirf ek card show hoga */}
        <div className="block md:hidden px-4">
          <NewCard
            imageSrc={win1}
            altText="Illustration of a laptop, globe, and certificate"
            title="Best LearnPress WordPress Theme Collection For 2023"
            date="Jan 24, 2023"
            description="Looking for an amazing & well-functional LearnPress WordPress Theme?..."
            titleColor=""
          />
        </div>

        {/* Desktop View: Sare cards show honge */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
          <NewCard
            imageSrc={win1}
            altText="Illustration of a laptop, globe, and certificate"
            title="Best LearnPress WordPress Theme Collection For 2023"
            date="Jan 24, 2023"
            description="Looking for an amazing & well-functional LearnPress WordPress Theme?..."
            titleColor=""
          />
          <NewCard
            imageSrc={win2}
            altText="Person working on a laptop in an office"
            title="Top WordPress Themes for Education"
            date="Feb 10, 2023"
            description="Discover the best education WordPress themes for online courses..."
            titleColor="text-blue-600"
          />
          <NewCard
            imageSrc={win3}
            altText="Person holding a tablet in a modern office"
            title="Latest Trends in E-Learning"
            date="Mar 15, 2023"
            description="E-learning trends you should know to stay ahead in the digital world..."
            titleColor=""
          />
         
        </div>
      </div>
    </div>
  );
};

export default WeaningNews;
