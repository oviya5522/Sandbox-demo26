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
     {/* mon/yr */}
      <div className="flex items-end justify-end gap-4 pr-27 bg-white">
        <span className="text-[18px] tracking-tight font-medium text-[#545a66]">
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="relative w-16 h-7 rounded-full bg-gray-200 transition-colors"
        >
          <span
            className="absolute top-1 left-1 w-5 h-5 bg-[#605dba] rounded-full shadow-md transition-transform"
            style={{
              transform: isYearly ? "translateX(32px)" : "translateX(0)",
            }}
          />
        </button>
        <span className="text-[18px] tracking-tight font-medium text-[#545a66]">
          Yearly
          <span className="ml-2 text-[18px] text-red-400 py-1 rounded-full">
            (Save 30%)
          </span>
        </span>
      </div>

      <div className="flex py-14 container mx-auto px-5 ">
       {/* left */}
        <div className="md:w-1/2 w-full p-4 ">
          <div className="h-full  rounded pl-6 p-6 bg-white">
            <p className="text-[#605dba] text-[18px] font-semibold">
              Our Pricing
            </p>
            <p className="text-[#343f52] text-[38px] pt-4 font-semibold leading-tight">
              We offer great and
              <br /> premium prices.
            </p>
            <p className="text-[#60697b] text-[17px] font-medium py-4 w-100">
              Enjoy a {""}
              <a
                href="#"
                className="text-[#605dba] font-semibold inline-flex items-center md:mb-2 lg:mb-0 
                    relative   
         after:content-[''] after:absolute after:left-0 after:-bottom-[2px] 
         after:w-0 after:h-[1px] after:bg-[#605dba] 
         after:transition-all after:duration-300 
         hover:after:w-full
                    "
              >
                free 30-day trial
              </a>
              {""} and experience the full service. No credit card required!
            </p>
            <a
              href="#"
              className="text-white bg-[#605dba] hover:scale-100 hover:translate-y-[-3px] transition-transform duration-300 font-semibold rounded-lg text-[17px] px-7 py-4 inline-flex justify-center text-center"
            >
              See All Prices
            </a>
          </div>
        </div>
        {/* price card */}
        <div className="flex gap-1 flex-row flex-wrap">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`w-70 border-gray-200 rounded-lg shadow-sm ${
                idx === 1 ? "-translate-y-3" : ""
              }`}
            >
              <div className="bg-[#c6c4f1] rounded-t-lg h-1.5"></div>

              <div className="flex items-end text-[#343f52] pt-6 pl-6">
                <span className="text-xl align-super">$</span>
                <span className="text-6xl font-medium">
                  {isYearly ? plan.yearly : plan.monthly}
                </span>
                <span className="ms-1 text-sm align-sub">
                  {isYearly ? "/yr" : "/mo"}
                </span>
              </div>

              <p className="text-[18px] font-medium text-[#343f52] pt-3 pl-6">
                {plan.name}
              </p>

              <ul role="list" className="space-y-3 my-7 pl-6 ">
                {plan.features.map((item, index) => (
                  <li key={index} className="flex gap-0">
                    <svg
                      className="w-5 h-5 text-[#605dba] flex-shrink-0 mt-0.5"
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
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                      <span className="font-semibold">{item.bold}</span>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pl-6 pb-6 mt-auto">
                <a
                  href="#"
                  className="text-white bg-[#605dba] hover:scale-100 hover:translate-y-[-3px] transition-transform duration-300 font-semibold rounded-lg text-[17px] px-5 py-2.5 inline-flex justify-center text-center"
                >
                  Choose plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Part6;
