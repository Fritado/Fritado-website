import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
              
                <img
                  className='main-img'
                  src='assets/img/about/1.jpg'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                
                <h2 className="heading">
                Our Journey: Pioneering SEO  with AI
                </h2>
                <p className='content mb-4 mb-xl-5 title-para'>
                Welcome to Fritado AI – where innovation meets expertise. We’re not just a team; we are a coalition of seasoned SEO specialists and forward-thinking entrepreneurs on a mission to revolutionize the SEO landscape. Since our inception in 2014, we’ve dedicated ourselves to mastering the intricacies of search engine optimization, helping countless businesses achieve their online goals.</p>
                <p className='content mb-4 mb-xl-5'>
                Despite the rapid evolution of technology, many businesses still rely on outdated manual techniques for content generation and SEO management. This inefficiency has propelled us to create Fritado AI, an intelligent solution designed to automate and optimize SEO tasks.</p>
                <p className='content mb-4 mb-xl-5'>
                Our specialized focus allows us to navigate the complexities of modern SEO with unparalleled precision. With Fritado AI, you can say goodbye to the hassles of keyword analysis, technical setups, and keeping up with Google’s ever-changing algorithms. We take care of everything, ensuring you not only save time but also achieve exceptional results.
                </p>
                

            
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
