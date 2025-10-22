import React, { useState } from "react";

const Part6 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const premiumFeatures = [
    { bold: "5", text: "Projects" },
    { bold: "100K", text: "API Access" },
    { bold: "200MB", text: "Storage" },
    { bold: "Weekly", text: "Reports" },
    { bold: "7/24", text: "Support" },
  ];

  const corporateFeatures = [
    { bold: "20", text: "Projects" },
    { bold: "300K", text: "API Access" },
    { bold: "500MB", text: "Storage" },
    { bold: "Weekly", text: "Reports" },
    { bold: "7/24", text: "Support" },
  ];

  const plans = [
    {
      name: "Premium Plan",
      monthly: 19,
      yearly: 199,
      features: premiumFeatures,
    },
    {
      name: "Corporate Plan",
      monthly: 49,
      yearly: 499,
      features: corporateFeatures,
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-12 py-10 flex flex-col lg:flex-row gap-6 lg:gap-6">
        <div className="md:w-1/2 w-full lg:pr-4 lg:pl-6">
          <div className="rounded p-6 bg-white">
            <p className="text-[#605dba] text-[16px] sm:text-[18px] font-semibold">
              Our Pricing
            </p>
            <p className="text-[#343f52] font-semibold pt-4 leading-tight text-[20px] sm:text-[32px] md:text-[38px] max-w-[400px] sm:max-w-[450px]">
              We offer great and
              <br /> premium prices.
            </p>
            <p className="text-[#6c7485] text-[18px] sm:text-[15px] font-medium py-4 max-w-[400px] sm:max-w-[450px]">
              Enjoy a{" "}
              <a
                href="#"
                className="text-[#605dba] font-semibold inline-flex items-center
                 relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] 
                 after:w-0 after:h-[1px] after:bg-[#605dba] after:transition-all after:duration-300 
                 hover:after:w-full"
              >
                free 30-day trial
              </a>{" "}
              and experience the full service. No credit card required!
            </p>
            <a
              href="#"
              className="text-white bg-[#605dba] hover:scale-100 hover:translate-y-[-2px] transition-transform duration-300 font-semibold rounded-lg text-[14px] sm:text-[16px] px-5 py-2.5 inline-flex justify-center text-center"
            >
              See All Prices
            </a>
          </div>
        </div>

        {/* toogle */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 lg:pl-6 lg:pr-6">
          <div
            className="flex items-center gap-4 justify-end w-full pr-6 lg:pr-12 relative"
            style={{ top: "-10px" }}
          >
            <span className="text-[14px] sm:text-[18px] tracking-tight font-medium text-[#545a66]">
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 sm:w-16 h-6 sm:h-7 rounded-full bg-gray-200 transition-colors"
            >
              <span
                className="absolute top-1 left-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#605dba] rounded-full shadow-md transition-transform"
                style={{
                  transform: isYearly ? "translateX(28px)" : "translateX(0)",
                }}
              />
            </button>
            <span className="text-[14px] sm:text-[18px] tracking-tight font-medium text-[#545a66]">
              Yearly
              <span className="ml-1 sm:ml-2 text-[12px] sm:text-[16px] text-red-400 py-1 rounded-full">
                (Save 30%)
              </span>
            </span>
          </div>

          {/* price card */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`w-full sm:w-52 lg:w-48 border-gray-200 rounded-lg shadow-sm flex flex-col text-left`}
              >
                <div className="bg-[#c6c4f1] rounded-t-lg h-1.5 w-full"></div>

           
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-6 w-full">
                  <div className="flex items-end justify-center lg:justify-start">
                    <span className="text-xl relative top-[-0.3rem]">$</span>
                    <span className="text-6xl font-medium">
                      {isYearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="ms-1 text-sm align-sub">
                      {isYearly ? "/yr" : "/mo"}
                    </span>
                  </div>

                  
                  <p className="text-[15px] sm:text-[16px] font-medium pt-3 w-full text-center lg:text-left">
                    {plan.name}
                  </p>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                  <ul role="list" className="space-y-3 my-7 w-full pl-0">
                    {plan.features.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 justify-center lg:justify-start w-full"
                      >
                        <svg
                          className="w-5 h-5 text-[#605dba] flex-shrink-0 mt-[3px]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-base font-normal leading-tight text-gray-500">
                          <span className="font-semibold">{item.bold}</span>{" "}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

             
                <div className="w-full flex justify-center lg:justify-start pb-6">
                  <a
                    href="#"
                    className="text-white bg-[#605dba] hover:scale-100 hover:translate-y-[-2px] transition-transform duration-300 font-semibold rounded-lg text-[14px] sm:text-[15px] px-4 py-2 inline-flex justify-center text-center"
                  >
                    Choose plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;
