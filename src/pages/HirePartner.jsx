import prt1 from '../assets/image/prt1.png';
import prt2 from '../assets/image/prt2.png';
import prt3 from '../assets/image/prt3.png';
import prt4 from '../assets/image/prt4.png';
import prt5 from '../assets/image/prt5.png';
import prt6 from '../assets/image/prt6.png';

const HirePartner = () => {
  const partners = [
    { image: prt1, alt: 'Amazon logo' },
    { image: prt2, alt: 'Google logo' },
    { image: prt3, alt: 'Microsoft logo' },
    { image: prt4, alt: 'PwC logo' },
    { image: prt5, alt: 'EY logo' },
    { image: prt6, alt: 'Oracle logo' },
  ];

  return (
    <div className="bg-white py-10 md:py-14 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Hiring Partners
        </h2>
        <p className="text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto text-base md:text-lg">
          Unlock the doors of success with the leading companies of the industry.
        </p>

        {/* Mobile: 1 column, Desktop: 6 columns */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-6 md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
  {partners.map((partner, index) => (
    <div 
      key={index}
      className="flex-shrink-0 flex items-center justify-center p-2 md:p-4 transition-transform duration-300 hover:scale-105"
    >
      <img
        src={partner.image}
        alt={partner.alt}
        className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
        loading="lazy"
        style={{ maxWidth: '160px' }}
      />
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default HirePartner;