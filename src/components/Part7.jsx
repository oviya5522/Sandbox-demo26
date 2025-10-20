import React from "react";
import pic7 from "../assets/pic7.png";

const Part7 = () => {
  return (
    <div className="bg-white">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container  pt-15 mx-auto ">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2  object-contain  h-[450px]"
              src={pic7}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              <h2 class="text-xl text-[#605dba] font-semibold ">Let’s Talk</h2>
              <h1 class=" text-3xl title-font  mb-1 pt-5 text-[#343f52] text-[38px] font-semibold leading-[1.3]">
                Let's make something great together. We are trusted by over
                5000+ clients.
              </h1>

              <p class=" text-[16px] font-medium text-[#50586b] mt-7 leading-[1.7]">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus.
              </p>
              <div className=" items-left py-5 ">
                <a
                  href="#"
                  type="button"
                  className="text-white   bg-[#605dba] hover:scale-100 hover:translate-y-[-3px]
         transition-transform duration-300
         font-semibold rounded-lg text-[17px] px-7 py-3 
        inline-flex justify-center text-center "
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Part7;
