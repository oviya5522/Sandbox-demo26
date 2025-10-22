import React from "react";
import pic7 from "../assets/pic7.png";

const Part7 = () => {
  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto px-5 lg:px-24 py-10">
          <div className="flex flex-wrap lg:flex-nowrap items-start">
            <img
              alt="ecommerce"
              className="w-full lg:w-1/2 object-contain h-[300px] sm:h-[450px] lg:h-[450px]"
              src={pic7}
            />

            <div className="w-full lg:w-1/2 lg:pl-16 lg:py-6 mt-6 lg:mt-0 text-left">
              <h2 className="text-lg sm:text-xl text-[#605dba] font-semibold">
                Let’s Talk
              </h2>

              <h1 className="text-3xl sm:text-2xl lg:text-[38px] title-font mb-4 pt-5 text-[#343f52] font-semibold leading-[1.3] sm:leading-[1.35] lg:leading-[1.5] max-w-[430px]">
                Let's make something great together. We are trusted by over
                5000+ clients.
              </h1>

              <p className="text-[17px] font-medium text-[#6c7485] mt-7 leading-[1.9] max-w-[550px]">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus.
              </p>

              <div className="pt-5">
                <a
                  href="#"
                  className="text-white bg-[#605dba] hover:scale-100 hover:translate-y-[-3px] transition-transform duration-300 font-semibold rounded-lg text-[15px] sm:text-[17px] px-6 py-2.5 inline-flex justify-center text-center"
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
