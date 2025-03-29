import { default as Slider } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 6000, // Slower transition speed for smooth scrolling
    slidesToShow: 6, // Default for desktop
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous smooth scrolling
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 6,
          speed: 7000,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 5,
          speed: 8000,
        }
      },
      {
        breakpoint: 480, // Small mobile
        settings: {
          slidesToShow: 4,
          speed: 9000,
        }
      }
    ]
  };

  return (
    <div className="bg-white py-10 md:py-14 w-full">
      <div className="container mx-auto px-0 text-center">
        <h2 className="font-poppins font-semibold text-[16px] md:text-[32px] leading-10 text-[#3D3D3D] mb-4 md:mb-6">
          Hiring Partners
        </h2>

        <p className="font-poppins font-normal mx-auto text-[#667085] 
          text-[10px] leading-[17px] w-[322px] h-[34px] 
          md:text-[18px] md:leading-[24px] md:w-[656px] md:h-[24px]
          xl:text-[12px] xl:pt-4 xl:mb-7">
          Unlock the doors of success with the leading companies of the industry.
        </p>

        {/* Carousel for All Screens */}
        <div className="px-0">
          <Slider {...sliderSettings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-2">
                <div className="flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="object-contain opacity-80 md:pt-[20px] hover:opacity-100 transition-opacity duration-200"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '153px', // Desktop size
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HirePartner;
