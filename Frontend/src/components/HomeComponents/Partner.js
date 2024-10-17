import React from "react";
import Slider from "react-slick";
import Partner1 from "../Assets/Partners/Blogger.jpg";
import Partner2 from "../Assets/Partners/Linkedin.jpg";
import Partner3 from "../Assets/Partners/facebook.jpg";
import Partner4 from "../Assets/Partners/google.jpg";
import Partner5 from "../Assets/Partners/insta.jpg";
import Partner6 from "../Assets/Partners/medium.jpg";
import Partner7 from "../Assets/Partners/reddit.jpg";
import Partner8 from "../Assets/Partners/twitter.jpg";
import Partner9 from "../Assets/Partners/wordpress.jpg";

const partnerLogos = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
  Partner8,
  Partner9,
];

const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="head-div">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="heading">Seamless Integration</h2>
          <div className="title-para">
            <p>
              With Multiple Social Platforms Including Facebook, Instagram, and
              Blogging Sites
            </p>
          </div>
        </div>
      </div>

      <div className="image-slider">
        <Slider {...settings}>
          {partnerLogos.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partner;
