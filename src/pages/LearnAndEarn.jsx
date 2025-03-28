import learnImage from '../assets/image/learnImage.png';

const LearnAndEarn = () => {
  return (
    <div className="m-full bg-[#0B1120] text-white font-poppins">
      <div className="mx-auto flex flex-col items-center justify-center 
        min-h-[542px] w-full max-w-[500px]
        md:max-w-[870px] md:min-h-[285px] md:flex-row
        lg:max-w-none lg:min-h-[602px] lg:px-16 xl:px-24">

        {/* Image Container */}
        <div className="flex-1 lg:flex-1 flex justify-center p-4 lg:p-8">
          <img
            src={learnImage}
            alt="Hand placing a coin on a stack of books with graduation caps and coins around"
            className="w-full lg:mr-[30%] md:mr-0 mr-6 max-w-[300px] md:max-w-[350px] lg:max-w-[500px] h-auto "
          />
        </div>

        {/* Text Content Container */}
        <div className="flex-1 lg:flex-1 text-center p-4 md:p-6 lg:text-left lg:pl-12">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
            Learn &amp; Earn
          </h1>
          <div className="space-y-2 lg:space-y-3 mb-6 text-poppins lg:mb-8">
            <p className="text-lg lg:text-xl">Curious About It?</p>
            <p className="text-lg lg:text-xl">Don’t worry! Fill out this form</p>
            <p className="text-lg lg:text-xl">And unlock all the answers you’ve</p>
            <p className="text-lg lg:text-xl">been waiting for.</p>
          </div>
          <a href="#" className="inline-block bg-blue-600 text-poppins text-white 
            py-2 px-6 lg:py-3 lg:px-8 rounded-full text-lg lg:text-xl
            hover:bg-blue-700 transition-colors duration-300">
            View Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearnAndEarn;