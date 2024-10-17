import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const PriceCard = forwardRef(({ plan }, ref) => {
  return (
    <div ref={ref} className="planCard">
      <div className="plan-card-container">
        <div className="planCardWrapper">
          <div class="PlanCard_PriceBlock">
            <p class="PlanCard_planName">{plan.plan}</p>
            <p class="PlanCard_planUseDescription">{plan.planDesc}</p>
            <div class="PlanCard_planCardPrice">
              <div class="PlanCard_optionPrice">
                <span class="PlanCard_priceSymbol">{plan.amountCurrency}</span>
                <h1 class="PlanCard_price heading mb-0 fs-1">{plan.amount}</h1>
                <div class="PlanCard_mm_yy">
                  <span class="PlanCard_perMonth">{plan.amounttime}</span>
                </div>
              </div>
            </div>
            <p class="small PlanCard_priceDescription">{plan.planpara}</p>
          </div>

          <div class="small PlanCard_operationsContainer">
            <span>{plan.planHeading}</span>
          </div>

          {plan.plan === "Enterprise" ? (
            ""
          ) : (
            <div className="pricing-button mt-4 text-center p-3  btn-base-color ">
              <Link to="">Get started</Link>
            </div>
          )}

          {/* below part plan */}
          <div class="PlanCard_descWrapper"></div>

          <div class="PlanCard_desktopDetails">
            <hr></hr>

            {plan.planPoints.map((points, index) => (
              <div class="small PlanCard_planFeatures">
                <div class="mb-1">
                  <p>
                    <strong>{points.title}</strong>
                  </p>
                </div>
                <div class="PlanCard_planFeature">
                  <span>
                    <TiTick size={16} />
                  </span>
                  <span>{points.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default PriceCard;
