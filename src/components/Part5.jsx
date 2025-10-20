import React from "react";
import pic9 from "../assets/pic9.png";

const Part5 = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center py-25 ">
        <div className=" w-5/6 h-[700px] rounded-4xl pt-20  bg-[#f0f0f8]">
          <p className="text-[#605dba] text-[18px] text-center font-semibold">
            Happy Customers
          </p>
          <p className=" text-[#343f52] text-[38px] pt-4 text-center font-semibold mx-[30] leading-13">
            Don't take our word for it. See what <br />
            <span>customers are saying about us.</span>
          </p>
          <div className="pt-4 flex gap-17">
            <div className="w-2/5 items-center">
              <img src={pic9} alt="" className="h-[320px]  pt-5 pl-35" />
            </div>

            <div
              id="manual-carousel"
              class="relative w-[600px] h-90 pt-18  "
              data-carousel="static"
              data-carousel-interval="0"
              data-carousel-slide="false"
            >
              <div class="relative h-56 overflow-hidden rounded-lg md:h-59">
                <div
                  class=" duration-700 ease-in-out"
                  data-carousel-item="active"
                  data-carousel-interval="0"
                  data-carousel-slide="false"
                  data-carousel="pause"
                >
                  <p>
                    <span class="ratings  inline-block relative w-20 h-[0.8rem] text-[1.2rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                  </p>
                  <p className="text-[18px] font-medium text-[#777f91] mt-2 leading-[1.9]">
                    “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vestibulum ligula porta felis euismod semper.
                    Cras justo odio consectetur nulla dapibus curabitur blandit
                    faucibus.”
                  </p>
                  <p className="text-[#343f52] text-[20px] font-semibold pt-4">
                    Coriss Ambady
                  </p>
                  <p className="text-[18px] font-medium text-[#777f91] mt-2 leading-[1.9]">
                    Financial Analyst
                  </p>
                </div>

                <div
                  class="hidden duration-500 ease-in-out"
                  data-carousel-item
                  data-carousel-interval="0"
                  data-carousel-slide="false"
                >
                  <p>
                    <span class="ratings  inline-block relative w-20 h-[0.8rem] text-[1.2rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                  </p>
                  <p className="text-[18px] font-medium text-[#777f91] mt-2 leading-[1.9]">
                    “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vestibulum ligula porta felis euismod semper.
                    Cras justo odio consectetur nulla dapibus curabitur blandit
                    faucibus.”
                  </p>
                  <p className="text-[#343f52] text-[20px] font-semibold pt-4">
                    Cory Zamora
                  </p>
                  <p className="text-[18px] font-medium text-[#777f91] mt-2 leading-[1.9]">
                    Marketing Specialist
                  </p>
                </div>

                <div
                  class="hidden duration-500 ease-in-out"
                  data-carousel-item
                  data-carousel-interval="0"
                  data-carousel-slide="false"
                >
                  <p>
                    <span class="ratings  inline-block relative w-20 h-[0.8rem] text-[1.2rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:!text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                  </p>
                  <p className="text-[18px] font-medium text-[#777f91] mt-2 leading-[1.9]">
                    “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vestibulum ligula porta felis euismod semper.
                    Cras justo odio consectetur nulla dapibus curabitur blandit
                    faucibus.”
                  </p>
                  <p className="text-[#343f52] text-[20px] font-semibold pt-4">
                    Nikolas Brooten
                  </p>
                  <p className="text-[18px] font-medium text-[#777f91] mt-2 leading-[1.9]">
                    Sales Manager
                  </p>
                </div>
              </div>

              <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-14 space-x-3  ">
                <button
                  type="button"
                  class="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-300"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  class="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-300"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  class="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-300"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part5;
