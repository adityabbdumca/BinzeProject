import learnEearn1 from '../assets/image/learnEearn1.png'
const LearnAndEarn = () => {
    return (
      <div className="bg-[#0B1120] text-white min-m-screen flex flex-col md:flex-row items-center justify-center  py-12">
        <div className="flex-1 flex justify-center">
          <img
            src={learnEearn1}
            alt="Hand placing a coin on a stack of books with graduation caps and coins around"
            className="max-w-full h-auto"
            width="400"
            height="300"
          />
        </div>
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:ml-8">
          <h1 className="text-3xl font-bold mb-4">Learn &amp; Earn</h1>
          <p className="text-lg mb-2">Curious About It?</p>
          <p className="text-lg mb-2">Don’t worry! Fill out this form</p>
          <p className="text-lg mb-4">And unlock all the answers you’ve</p>
          <p className="text-lg mb-4">been waiting for.</p>
          <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-lg">
            View Form
          </a>
        </div>
      </div>
    );
  };
  export default LearnAndEarn;