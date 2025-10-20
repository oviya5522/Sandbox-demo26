import React from "react";
import pic3 from "../assets/pic3.png";
import ideas from "../assets/idea.svg";
import innovative from "../assets/innovative.svg";
import rapid from '../assets/rapid.svg'
import headset from '../assets/headset.svg'

const Part3= () => {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden bg-white">
        <div class="container  pt-15 mx-auto bg-white">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 lg:h-auto object-contain "
              src={pic3}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-xl text-[#605dba] font-semibold ">
                Why Choose Us?
              </h2>
              <h1 class=" text-[#343f52] text-[38px] leading-12 font-semibold mt-4">
                So here a few reasons why our valued customers choose us.
              </h1>
              {/* <div className="grid grid-col-2  gap-4">
                <div className='flex gap-6'>
                    <img src={ideas}  alt="ideas" className="h-7" />
                    <div className="flex flex-col">
                        <h1 className="text-[#343f52] font-semibold text-[20px]">Creativity</h1>
                        <p className="text-[#60697b] text-base/8 font-medium">Curabitur blandit<br/>lacus porttitor<br/>ridiculus mus.</p>
                    </div>
                    <div className='flex gap-6'>
                    <img src={innovative}  alt="ideas" className="h-7" />
                    <div className="flex flex-col">
                        <h1 className="text-[#343f52] font-semibold text-[20px]">Innovative <br/>Thinking</h1>
                        <p className="text-[#60697b] text-base/8 font-medium">Curabitur blandit<br/>lacus porttitor<br/>ridiculus mus.</p>
                    </div>
                    
                </div>
                    </div>
                <div>4</div>
                <div>4</div>
        
              </div> */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-7 pt-5 bg-white">
                <div class="bg-white rounded-lg text-center">
                  <div className='flex gap-4'>
                    <img src={ideas}  alt="ideas" className="h-9" />
                    <div className="flex flex-col text-left">
                        <h1 className="text-[#343f52] font-semibold text-[24px]">Creativity</h1>
                        <p className="text-[#60697b] text-base/8 font-medium text-[17px]">Curabitur blandit<br/>lacus porttitor<br/>ridiculus mus.</p>
                    </div>
                    </div>
                </div>

                <div class="  rounded-lg text-center">
                  <div className='flex gap-4'>
                    <img src={innovative}  alt="ideas" className="h-9" />
                    <div className="flex flex-col text-left">
                        <h1 className="text-[#343f52] font-semibold text-[24px]">Innovative <br/>Thinking</h1>
                        <p className="text-[#60697b] text-base/8 font-medium text-[17px]">Curabitur blandit<br/>lacus porttitor<br/>ridiculus mus.</p>
                    </div>
                    </div>
                    </div>

                <div class="  rounded-lg text-center ">
                 <div className='flex gap-4'>
                    <img src={rapid}  alt="ideas" className="h-9" />
                    <div className="flex flex-col text-left">
                        <h1 className="text-[#343f52] font-semibold text-[24px]">Rapid Solutions</h1>
                        <p className="text-[#60697b] text-base/8 font-medium text-[17px]">Curabitur blandit<br/>lacus porttitor<br/>ridiculus mus.</p>
                    </div>
                    </div>
                </div>

                <div class="  rounded-lg text-center">
                 <div className='flex gap-4'>
                    <img src={headset}  alt="ideas" className="h-9" />
                    <div className="flex flex-col text-left">
                        <h1 className="text-[#343f52] font-semibold text-[24px]">Top-Notch<br/> Support</h1>
                        <p className="text-[#60697b] text-base/8 font-medium text-[17px]">Curabitur blandit<br/>lacus porttitor<br/>ridiculus mus.</p>
                    </div>
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

export default Part3;
;
