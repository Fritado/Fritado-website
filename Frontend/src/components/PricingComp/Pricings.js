import React, { useEffect, useRef } from "react";
import PriceCard from "./PriceCard";
import ResearchDevFAQ from "../ResearchDevelopment/ResearchDevFAQ";
import { planData } from "../PricingComp/PlanData";
import { TiTick } from "react-icons/ti";

const Pricings = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      if (cardRefs.current.length) {
        const heights = cardRefs.current.map((ref) => ref.clientHeight);
        const maxHeight = Math.max(...heights);
        cardRefs.current.forEach((ref) => {
          ref.style.height = `${maxHeight}px`;
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cardRefs.current.length]);

  return (
    <div>
      <section className="head-div pricing-head">
        <div className="d-flex flex-row gap-4 my-3 mx-2 justify-content-center align-items-center ">
          <div className="d-flex flex-row gap-1">
            <TiTick size={22} />
            <p className="fw-bolder">No credit card required</p>
          </div>
          <div className="d-flex flex-row gap-1">
            <TiTick size={22}/>
            <p className="fw-bolder">No time limit on Free plan</p>
          </div>
        </div>
        <div className="pricing-container d-flex flex-wrap justify-content-center align-items-center mx-auto title-content">
          {planData.map((plan, index) => (
            <PriceCard
              key={plan.id}
              plan={plan}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </section>
      <section className="head-div">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center text-center title-content">
            <h2 className="heading">Why Choose Fritado AI?</h2>
            <div className="title-para">
              <p>
                Fritado AI automates your SEO, boosting brand visibility and
                online revenue.
              </p>
            </div>
          </div>
          <div>
            <ResearchDevFAQ />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricings;
