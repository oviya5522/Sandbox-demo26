import React, { useState } from "react";
import pic9 from "../assets/pic9.png";

const content = [
  {
    name: "Coriss Ambady",
    role: "Financial Analyst",
    text: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper.",
  },
  {
    name: "Cory Zamora",
    role: "Marketing Specialist",
    text: "Cras justo odio consectetur nulla dapibus curabitur blandit faucibus. Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    name: "Nikolas Brooten",
    role: "Sales Manager",
    text: "Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus dolor auctor.",
  },
];

const Part5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center py-20">
        <div className="w-5/6 rounded-4xl pt-16 bg-[#f0f0f8] lg:h-[700px]">
          <div className="text-center px-6 sm:px-10">
            <p className="text-[#605dba] text-[18px] sm:text-[20px] font-semibold">
              Happy Customers
            </p>
            <p className="text-[#343f52] font-semibold pt-4 leading-tight text-[24px] sm:text-[30px] lg:text-[38px] max-w-[650px] mx-auto">
              <span className="block lg:hidden whitespace-pre-line">
                {
                  "Don't take our\nword for it. See\nwhat customers are saying about\nus."
                }
              </span>
              <span className="hidden lg:block">
                Don't take our word for it. See what <br />
                <span className="text-[#605dba]">
                  customers are saying about us.
                </span>
              </span>
            </p>
          </div>

          <div className="pt-10 flex flex-col lg:flex-row items-start gap-10 justify-center">
            <div className="hidden lg:block w-auto">
              <img src={pic9} alt="Customer" className="h-[320px]" />
            </div>

            {/* carousel */}
            <div className="w-full lg:w-auto flex justify-center">
              <div className="flex flex-col px-4 sm:px-6 lg:px-0 max-w-full sm:max-w-[550px] lg:max-w-[400px]">
                <p>
                  <span className="inline-block text-[1.2rem] text-[#fcc032]">
                    ★★★★★
                  </span>
                </p>

                <p className="text-[16px] sm:text-[18px] lg:text-[16px] font-medium text-[#6c7485] mt-3 leading-[1.8] text-justify">
                  {content[activeIndex].text}
                </p>

                <p className="text-[#343f52] text-[18px] lg:text-[16px] font-semibold pt-4">
                  {content[activeIndex].name}
                </p>

                <p className="text-[16px] lg:text-[14px]  text-[#6c7485] font-medium mt-1">
                  {content[activeIndex].role}
                </p>

                <div className="flex justify-start mt-5 space-x-3">
                  {content.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        activeIndex === i ? "bg-[#605dba]" : "bg-gray-400"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part5;
