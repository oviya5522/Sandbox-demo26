import React from "react";
import pic4 from "../assets/pic4.png";
import CountUp from "./CountUp";

const Part4 = () => {
  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font overflow-hidden bg-white">
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6">
              <h2 className="text-xl title-font text-[#605dba] font-semibold tracking-widest font-[sans-serif]">
                Our Solutions
              </h2>

              <h1 className="text-[#343f52] font-semibold text-[22px] sm:text-[38px] leading-snug sm:leading-12 w-full mt-4">
                Just sit & relax
                <br />
                while we take care
                <br />
                of your business needs.
              </h1>

              <p className="text-[15px] sm:text-[17px] font-medium text-[#6c7485] mt-5 leading-[1.7]">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus. Maecenas sed
                diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-6">
                <div className="flex flex-col">
                  <h1 className="text-[#343f52] text-[36px] sm:text-[44px] font-semibold">
                    <CountUp
                      from={0}
                      to={99.7}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    <span className="text-[36px] sm:text-[44px]">%</span>
                  </h1>
                  <p className="text-[#343f52] text-[15px] sm:text-[17px] font-semibold">
                    Customer Satisfaction
                  </p>
                  <span class="ratings inline-block relative w-20 h-[0.8rem] text-[1.2rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                </div>

                <div className="flex flex-col">
                  <h1 className="text-[#343f52] text-[36px] sm:text-[50px] font-semibold">
                    <CountUp
                      from={0}
                      to={4}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    <span className="text-[36px] sm:text-[40px]">x</span>
                  </h1>
                  <p className="text-[#343f52] text-[15px] sm:text-[17px] font-semibold">
                    New Visitors
                  </p>
                  <span class="ratings inline-block relative w-20 h-[0.8rem] text-[1.2rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                </div>
              </div>
            </div>

            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={pic4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Part4;
