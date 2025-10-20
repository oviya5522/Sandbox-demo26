import React from "react";
import seo from "../assets/seo.svg";
import web_Design from "../assets/webdesign.svg";
import social_engagement from "../assets/social.svg";
import app_dev from "../assets/appdevelopment.svg";

const Part2 = () => {
  return (
    <div>
      <div className="bg-white">
        <p className="text-[#605dba] text-center font-semibold">What We Do?</p>
        <p className=" text-[#343f52] text-[38px] px-30 text-center font-semibold">
          The full service we are offering is specifically designed to meet your
          business needs.
        </p>
      </div>
      <section class="text-gray-600 body-font bg-white ">
        <div class="container px-8 py-12 mx-auto">
          {" "}
          <div class="flex flex-wrap -m-4">
            {/* card1 */}
            <div class="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div class="h-full border-none  border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="w-15 h-auto object-cover object-center mx-auto"
                  src={seo}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 text-center">
                    SEO Services
                  </h1>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    Nulla vitae elit libero, a<br />
                    pharetra augue. Donec id
                    <br />
                    elit non mi porta gravida
                    <br />
                    eget metus cras justo.
                  </p>
                  <div class="flex items-center justify-center flex-wrap">
                    <a
                      href="#"
                      class="text-[#605dba] font-semibold inline-flex items-center md:mb-2 lg:mb-0 
                    relative   
         after:content-[''] after:absolute after:left-0 after:-bottom-[2px] 
         after:w-0 after:h-[1px] after:bg-[#605dba] 
         after:transition-all after:duration-300 
         hover:after:w-full
                    "
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* card2 */}
            <div class="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div class="h-full border-none  border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="w-15 h-auto object-cover object-center mx-auto"
                  src={web_Design}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 text-center">
                    Web Design
                  </h1>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    Nulla vitae elit libero, a<br />
                    pharetra augue. Donec id
                    <br />
                    elit non mi porta gravida
                    <br />
                    eget metus cras justo.
                  </p>
                  <div class="flex items-center justify-center flex-wrap pt-2">
                    <a
                      href="#"
                      class=" 
                    text-[#605dba] font-semibold inline-flex items-center md:mb-2 lg:mb-0 
                    relative   
         after:content-[''] after:absolute after:left-0 after:-bottom-[2px] 
         after:w-0 after:h-[1.5px] after:bg-[#605dba] 
         after:transition-all after:duration-300 
         hover:after:w-full
                    "
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* card3 */}
            <div class="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div class="h-full border-none  border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="w-15 h-auto object-cover object-center mx-auto"
                  src={social_engagement}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 text-center">
                    Social Engagement
                  </h1>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    Nulla vitae elit libero, a<br />
                    pharetra augue. Donec id
                    <br />
                    elit non mi porta gravida
                    <br />
                    eget metus cras justo.
                  </p>
                  <div class="flex items-center justify-center flex-wrap">
                    <a
                      href="#"
                      class="text-[#605dba] inline-flex items-center md:mb-2 lg:mb-0 font-semibold
                    relative   
         after:content-[''] after:absolute after:left-0 after:-bottom-[2px] 
         after:w-0 after:h-[1.5px] after:bg-[#605dba] 
         after:transition-all after:duration-300 
         hover:after:w-full
                    "
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* card4 */}
            <div class="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div class="h-full border-none border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="w-15 h-auto object-cover object-center mx-auto"
                  src={app_dev}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 text-center ">
                    App Development
                  </h1>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    Nulla vitae elit libero, a<br />
                    pharetra augue. Donec id
                    <br />
                    elit non mi porta gravida
                    <br />
                    eget metus cras justo.
                  </p>
                  <div class="flex items-center justify-center flex-wra">
                    <a
                      href="#"
                      class="text-[#605dba] font-semibold inline-flex items-center md:mb-2 lg:mb-0
                    relative   
         after:content-[''] after:absolute after:left-0 after:-bottom-[2px] 
         after:w-0 after:h-[1.5px] after:bg-[#605dba] 
         after:transition-all after:duration-300 
         hover:after:w-full
                    "
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Part2;
