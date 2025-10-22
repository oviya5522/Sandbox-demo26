import React from "react";
import cloud1 from "../assets/cloud2.png";

const Part8 = () => {
  return (
    <div className="bg-white py-20 relative">
      <div className="rounded-lg flex flex-col justify-center items-center bg-[#e5e5ec] px-5 sm:px-10 text-center relative z-10">
        <p className="text-[#605dba] text-[18px] sm:text-[20px] font-semibold pt-5">
          Analyze Now
        </p>

        <p className="text-[#343f52] text-[28px] sm:text-[32px] lg:text-[38px] font-semibold leading-[1.4] sm:leading-[1.5] lg:leading-[1.6] mt-3 max-w-[800px]">
          Wonder how much faster your website <br className="hidden sm:block" />
          can go? Easily check your SEO Score now.
        </p>

        <div className="pt-10 w-full max-w-[500px] px-3 sm:px-0 relative z-10">
          <form>
            <div className="relative w-full">
              <input
                type="text"
                id="website"
                className="peer block w-full rounded-lg border border-gray-300 px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-[#605dba] focus:ring-0 focus:outline-none"
                placeholder=" "
                required
              />
              <label
                htmlFor="website"
                className="absolute left-4 top-0 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 ease-in-out
                  peer-placeholder-shown:top-3/4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                  peer-focus:top-5 peer-focus:text-xs peer-focus:text-[#605dba]"
              >
                Enter Website URL
              </label>
              <button
                type="submit"
                className="text-white absolute right-0 top-0 bottom-0 bg-[#605dba] font-semibold rounded-r-lg text-[15px] sm:text-[17px] px-5 sm:px-6 border-none"
              >
                Analyze
              </button>
            </div>
          </form>
        </div>

        <img
          src={cloud1}
          alt="cloud"
          className="mt-8 sm:mt-12 w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Part8;
