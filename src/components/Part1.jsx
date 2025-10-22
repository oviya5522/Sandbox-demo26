import React, { useEffect, useState } from "react";
import cloud2 from "../assets/cloud2.png";
import pic1 from "../assets/pic1.png";

const Part1 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      <section className="relative flex flex-col bg-[#F0F0F8] w-full overflow-hidden">
        
        <img
          src={cloud2}
          alt="cloud"
          className="absolute bottom-0 left-0 w-full h-[140px] object-cover z-0"
        />

        
        <div
          className={`flex flex-col lg:flex-row justify-between items-center lg:items-start 
              gap-6
              px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] xl:px-[160px] 
              pt-12 lg:pt-28 relative z-10
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
            `}
        >
       
          <div className="flex flex-col lg:w-[60%] w-full text-center lg:text-left">
            <h1 className="text-[30px] sm:text-[38px] lg:text-[47px] font-semibold leading-tight text-[#343f52] font-[Urbanist, sans-serif] whitespace-pre-line">
              {"Grow Your Business\nwith "}
              <span className="text-[#605dba]">Our Marketing{"\n"}Solutions</span>
            </h1>

            <p className="text-[18px] sm:text-[20px] lg:text-[23px] font-normal text-[#60697b] py-6 font-[sans-serif] max-w-[650px] mx-auto lg:mx-0 leading-relaxed whitespace-pre-line">
              <span className="hidden lg:inline">
                {"We help our clients to increase their website\ntraffic, rankings, and visibility in search results."}
              </span>
              <span className="lg:hidden">
                We help our clients to increase their website traffic, rankings, and visibility in search results.
              </span>
            </p>

            <div className="flex flex-row justify-center lg:justify-start gap-3 flex-wrap">
              <a
                href="#"
                className="bg-[#605dba] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:translate-y-[-3px] transition-transform duration-300"
              >
                Try it for Free
              </a>
              <a
                href="#"
                className="border-2 border-[#605dba] text-[#605dba] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-[#605dba] hover:text-white hover:translate-y-[-3px] transition-transform duration-300"
              >
                Explore Now
              </a>
            </div>
          </div>

     
          <div className="relative mt-8 lg:mt-0 lg:ml-[20px]">
            <img
              src={pic1}
              alt="Illustration"
              className={`h-[330px] sm:h-[450px] lg:h-[650px] mx-auto lg:mx-0 transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Part1;
