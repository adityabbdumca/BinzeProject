import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import prt1 from '../assets/image/prt1.png';
import prt2 from '../assets/image/prt2.png';
import prt3 from '../assets/image/prt3.png';
import prt4 from '../assets/image/prt4.png';
import prt5 from '../assets/image/prt5.png';
import prt6 from '../assets/image/prt6.png';
import prt7 from '../assets/image/prt7.png';

const HirePartner = () => {
  const partners = [
    { image: prt1, alt: 'Amazon logo' },
    { image: prt2, alt: 'Google logo' },
    { image: prt3, alt: 'Microsoft logo' },
    { image: prt4, alt: 'PwC logo' },
    { image: prt5, alt: 'EY logo' },
    { image: prt6, alt: 'Oracle logo' },
  ];

  const cards = [
    {
      title: "We also Give Video",
      title1: "Counselling",
      image: prt7,
      alt: 'Video Counselling',
      cta: 'Get it Now',
    },
    {
      title: 'Struggling for your',
      title1: 'University?',
      image: 'https://storage.googleapis.com/a1aa/image/QrLm5iUmhCGMQ95CZRhOSuw6yMfS4i-1WoLJIbFmfGs.jpg',
      alt: 'University Help',
      cta: 'Suggest University',
    },
  ];

  return (
    <div className="bg-white py-10 md:py-14">
      {/* Hiring Partners Section */}
      <div className="container mx-auto px-5 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Hiring Partners</h2>
        <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Unlock the doors of success with the leading companies of the industry.
        </p>

        {/* Responsive Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-8 md:mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-3 md:p-4">
              <img
                src={partner.image}
                alt={partner.alt}
                className="h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Cards Section */}
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl lg:max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start transition-transform hover:scale-105"
            >
              <div className="flex-1 md:pr-6 text-center md:text-left">
                <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4 leading-tight">
                  {card.title}
                  <br />
                  {card.title1}
                </h2>
                <button className="bg-white text-blue-700 font-semibold py-2.5 px-6 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 text-sm md:text-base flex items-center gap-2">
                  {card.cta} <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="w-[160px] md:w-[180px] mt-4 md:mt-0">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="rounded-lg shadow-md object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HirePartner;
