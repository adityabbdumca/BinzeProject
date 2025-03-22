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
    <div className="bg-white py-10 md:py-14 m-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 
  className="w-full max-w-[432px] h-10 font-poppins font-semibold text-[16px] md:text-[32px] leading-10 text-[#3D3D3D] mx-auto mb-4 text-center"
>
  Hiring Partners
</h2>

       {/* Mobile Screen (322px) */}
<p className="md:hidden font-poppins font-normal text-[10px] leading-[17px] w-[322px] h-[34px] text-center mx-auto text-[#667085]">
  Unlock the doors of success with the leading companies of the industry.
</p>

{/* Desktop Screen (656px) - Hidden on mobile/tablet */}
<p className="hidden md:block xl:hidden font-poppins font-normal text-[18px] leading-[24px] w-[656px] h-[24px] text-center mx-auto text-[#667085]">
  Unlock the doors of success with the leading companies of the industry.
</p>

{/* Tablet Screen (12px) - Hidden on mobile/desktop */}
<p className="hidden xl:block font-poppins pt-4 mb-7 font-normal text-[12px] w-full text-center mx-auto text-[#667085]">
  Unlock the doors of success with the leading companies of the industry.
</p>

        {/* Mobile: Horizontal scroll with 4 visible cards */}
        {/* Tablet/Desktop: 6-column grid */}
        <div className="flex overflow-x-auto space-x-6 md:grid md:grid-cols-6 md:gap-8 md:space-x-0 scrollbar-hide">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 flex items-center justify-center
                         w-[111px] h-[37px]    /* Mobile */
                         md:w-full md:h-[34px] md:pt-4 /* Tablet */
                         lg:h-[51px]           /* Desktop */
                         transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.image}
                alt={partner.alt}
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
                style={{
                  maxWidth: '153px', // Desktop max-width
                  '@media (min-width: 768px)': { 
                    maxWidth: '102px' // Tablet max-width
                  },
                  '@media (max-width: 767px)': { 
                    maxWidth: '111px' // Mobile max-width
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HirePartner;