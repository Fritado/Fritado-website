import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import FritadoClient1 from "../Assets/clientLogo/client/Fritado_client_Jhanvi_enterprises.png";
import FritadoClient2 from "../Assets/clientLogo/client/Fritado_client_vijayashree_Hospitals.png";
import FritadoClient3 from "../Assets/clientLogo/client/Fritado_client_bullsorbit.png";
import FritadoClient4 from "../Assets/clientLogo/client/Fritado_client_airbiz.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="testimonial-area head-div">
        <div className="container pd-bottom-100">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center">
                <h2 className="heading">What Client Think About Us?</h2>
              </div>
            </div>
          </div>
          <div className="testimonial-slider-2 owl-carousel slider-control-dots">
            <Slider {...settings}>
              <div className="item">
                <div className="single-testimonial-inner style-3">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="thumb">
                        <div className="shadow-img">
                          <img src={FritadoClient1} alt="img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 align-self-center">
                      <div className="details">
                        <img
                          className="quote"
                          src="assets/img/testimonial/01.png"
                          alt="img"
                        />
                        <p className="designation mb-0">
                          We've seen remarkable improvements in website
                          performance with Fritado. Their AI techniques have
                          driven substantial traffic increases.
                        </p>
                        <h6 className="mb-0 mt-3">Rabindranath M</h6>
                        <div className="ratting-inner mt-3">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-3">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="thumb">
                        <div className="shadow-img ">
                          <img src={FritadoClient2} alt="img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 align-self-center">
                      <div className="details">
                        <img
                          className="quote"
                          src="assets/img/testimonial/01.png"
                          alt="img"
                        />
                        <p className="designation mb-0">
                          Fritado's AI-driven SEO strategies improved our online
                          visibility, increasing brand awareness and customer
                          acquisition.
                        </p>
                        <h6 className="mb-0 mt-3">Dr. Vijay</h6>
                        <div className="ratting-inner mt-3">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-3">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="thumb">
                        <div className="shadow-img">
                          <img src={FritadoClient3} alt="img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 align-self-center">
                      <div className="details">
                        <img
                          className="quote"
                          src="assets/img/testimonial/01.png"
                          alt="img"
                        />
                        <p className="designation mb-0">
                          Fritado's AI-driven SEO solutions boosted our organic
                          traffic by 150% and improved our search rankings.
                          Their support is exceptional.
                        </p>
                        <h6 className="mb-0 mt-3">Ravi Honda</h6>
                        <div className="ratting-inner mt-3">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-3">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="thumb">
                        <div className="shadow-img">
                          <img src={FritadoClient4} alt="img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 align-self-center">
                      <div className="details">
                        <img
                          className="quote"
                          src="assets/img/testimonial/01.png"
                          alt="img"
                        />
                        <p className="designation mb-0">
                          Fritado's advanced SEO strategies and AI-driven
                          analytics have significantly enhanced our online
                          presence, driving more qualified traffic.
                        </p>
                        <h6 className="mb-0 mt-3">Mr Javeed</h6>
                        <div className="ratting-inner mt-3">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* =================== Testimonial Three End ===================*/}
    </>
  );
};

export default Testimonial;
