import React from "react";
import pic4 from "../assets/pic4.png";
import CountUp from "./CountUp";
// text-[38px]
const Part4 = () => {
  return (
    <div className="bg-white">
      <section class="text-gray-600 body-font overflow-hidden bg-white">
        <div class="container px-5  mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-xl title-font text-[#605dba] font-semibold tracking-widest font-[ sans-serif]">
                Our Solutions
              </h2>
              <h1 class="text-[#343f52] text-[38px] leading-12 font-semibold mt-4">
                Just sit & relax while we take care of your business needs.
              </h1>

              <p class=" text-[17px] font-medium text-[#777f91] mt-7 leading-[1.9]">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus. Maecenas sed
                diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna.
              </p>
              <div className="flex gap-10 pt-6">
                <div className="flex flex-col">
                  <h1 className="text-[#343f52] text-[44px] font-semibold">
                    <CountUp
                      from={0}
                      to={99.7}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-[47px] "
                    />
                    <span className="text-[44px]">%</span>
                  </h1>
                  <p className="text-[#343f52] text-[17px] font-semibold">
                    Customer Satisfaction
                  </p>
                  <p className="">
                    <span class="ratings  inline-block relative w-20 h-[0.8rem] text-[1.2rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#343f52] text-[50px] font-semibold">
                    <CountUp
                      from={0}
                      to={4}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-[44px] "
                    />
                    <span className="text-[40px]">x</span>
                  </h1>
                  <p className="text-[#343f52] text-[17px] font-semibold">
                    New Visitors
                  </p>
                  <p>
                    <span class="ratings  inline-block relative w-20 h-[0.8rem] text-[1.2rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={pic4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Part4;
