import React from "react";
import seo from "../assets/seo.svg";
import web_Design from "../assets/webdesign.svg";
import social_engagement from "../assets/social.svg";
import app_dev from "../assets/appdevelopment.svg";

const Part2 = () => {
  const cards = [
    { img: seo, title: "SEO Services" },
    { img: web_Design, title: "Web Design" },
    { img: social_engagement, title: "Social Engagement" },
    { img: app_dev, title: "App Development" },
  ];

  return (
    <div className="bg-white">
      <div className="text-center px-4 sm:px-8 lg:px-[120px]">
        <p className="text-[#605dba] font-semibold">What We Do?</p>
        <p
          className="text-[#343f52] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold 
                      leading-relaxed lg:leading-[50px] mt-2"
        >
          The full service we are offering is specifically designed to meet your
          business needs.
        </p>
      </div>

      <section className="text-gray-600 body-font bg-white">
        <div className="container px-2 sm:px-4 lg:px-[120px] py-12 mx-auto">
          <div className="flex flex-wrap -m-2 lg:-m-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4"
              >
                <div className="h-full border-none border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-4"
                    src={card.img}
                    alt={card.title}
                  />
                  <div className="p-4 sm:p-6">
                    <h1 className="text-base sm:text-lg font-medium text-gray-900 mb-2 text-center">
                      {card.title}
                    </h1>
                    <p
                      className="text-[#6c7485] font-medium leading-snug text-sm sm:text-base lg:leading-[28px] 
              text-center mb-4 px-2 sm:px-4 lg:px-0"
                    >
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida eget metus cras justo.
                    </p>

                    <div className="flex items-center justify-center">
                      <a
                        href="#"
                        className="text-[#605dba] font-semibold inline-flex items-center relative
                        after:content-[''] after:absolute after:left-0 after:-bottom-[2px]
                        after:w-0 after:h-[1.5px] after:bg-[#605dba]
                        after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Part2;
