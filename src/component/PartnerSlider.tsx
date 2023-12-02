import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerSlider: React.FC = () => {
  const partnerImages = [
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์.png",
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/Seal_of_the_Office_of_the_Prime_Minister_of_Thailand.svg_.png",
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/logo-1.png",
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/Logo-thaihealth_Thai_with_Text.png",
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/logo-small.png",
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์.png",
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/Seal_of_the_Office_of_the_Prime_Minister_of_Thailand.svg_.png",
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/logo-1.png",
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/Logo-thaihealth_Thai_with_Text.png",
    "https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/logo-small.png",

    // Add more image links here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="partner-slider-container">
      <Slider {...settings}>
        {partnerImages.map((imageLink, index) => (
          <div key={index} className="partner-logo">
            <img
              className="partner-img"
              src={imageLink}
              alt={`Partner Logo ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSlider;
