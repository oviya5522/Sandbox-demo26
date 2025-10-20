import React from 'react'
import cloud2 from '../assets/cloud2.png'
import pic1 from "../assets/pic1.png";
const Part1 = () => {
  return (
    <div className='bg-white'>
        <section className="relative flex flex-col bg-[#F0F0F8] w-full overflow-hidden">
         
          <img
            src={cloud2}
            alt="cloud"
            className="absolute top-[80%] left-0  w-screen z-0 h-[140px] object-cover  "
          />
        
          <div className="flex pl-30 pt-20 relative z-10">
           
            <div className="flex flex-col w-130">
              <h1 className="text-[47px] font-semibold leading-tight text-[#343f52] font-[Urbanist, sans-serif]">
                Grow Your Business with
                <span className="font-semibold text-[#605dba]">
                  {" "}Our Marketing Solutions
                </span>
              </h1>
        
              <p className="text-[22px] font-normal text-[#60697b] w-120 py-9 font-[sans-serif]">
                We help our clients to increase their website traffic, rankings
                and visibility in search results.
              </p>
        
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                <a
                  href="#"
                  className="bg-[#605dba] text-white px-6 py-3 rounded-lg text-lg font-medium hover:scale-100 hover:translate-y-[-3px]
         transition-transform duration-300"
                >
                  Try it for Free
                </a>
                <a
                  href="#"
                  className="border-2 border-[#605dba] text-[#605dba] px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#605dba] hover:text-white hover:scale-100 hover:translate-y-[-3px]
         transition-transform duration-300"
                >
                  Explore Now
                </a>
              </div>
            </div>
        
           
            <div className="relative">
              <img
                src={pic1}
                alt="pic1"
                className="h-[600px]  pl-30 relative z-10"
              />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Part1