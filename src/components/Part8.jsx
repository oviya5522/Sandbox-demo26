import React from "react";
import cloud1 from "../assets/cloud2.png";
//  bg-[#e5e5ec]

const Part8 = () => {
  return (
    <div className="py-20 bg-white">
      <div className="  h-[480px] rounded-lg flex justify-center flex-col  bg-[#e5e5ec] items-center ">
        <p className="text-[#605dba] text-[18px] text-center font-semibold pt-35">
          Analyze Now
        </p>
        <p className=" text-[#343f52] text-[38px]  text-center font-semibold mx-[30] leading-13">
          Wonder how much faster your website <br />
          <span>can go? Easily check your SEO Score now.</span>
        </p>
        <div className="pt-10">
          <form>
            <div className="relative w-110">
              <input
                type="text"
                id="website"
                className="peer block w-full rounded-lg border border-gray-300 px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-[#605dba] focus:ring-0 focus:outline-none"
                placeholder=" "
                required
              />
              <label
                htmlFor="website"
                className="absolute left-5 top-0 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 ease-in-out
    peer-placeholder-shown:top-3/4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
    peer-focus:top-5 peer-focus:text-xs peer-focus:text-[#605dba] "
              >
                Enter Website URL
              </label>
              <button
                type="submit"
                className="text-white absolute right-0 top-0 bottom-0 bg-[#605dba] font-semibold rounded-r-lg text-[17px] px-6 border-none"
              >
                Analyze
              </button>
            </div>
          </form>
          {/* cloud */}
        </div>

        <img src={cloud1} alt="" className="w-full items-end pt-25" />
      </div>
    </div>
  );
};

export default Part8;
