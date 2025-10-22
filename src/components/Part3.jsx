import React from "react";
import pic3 from "../assets/pic3.png";
import ideas from "../assets/idea.svg";
import innovative from "../assets/innovative.svg";
import rapid from "../assets/rapid.svg";
import headset from "../assets/headset.svg";

const Part3 = () => {
  const features = [
    {
      img: ideas,
      title: "Creativity",
      text: "Curabitur blandit lacus porttitor ridiculus mus blandit luctus magnis.",
    },
    {
      img: innovative,
      title: "Innovative Thinking",
      text: "Curabitur blandit lacus porttitor ridiculus mus blandit luctus magnis.",
    },
    {
      img: rapid,
      title: "Rapid Solutions",
      text: "Curabitur blandit lacus porttitor ridiculus mus blandit luctus magnis.",
    },
    {
      img: headset,
      title: "Top-Notch Support",
      text: "Curabitur blandit lacus porttitor ridiculus mus blandit luctus magnis.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 px-6 lg:px-20 py-12">
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
          <img
            src={pic3}
            alt="ecommerce"
            className="w-full lg:w-auto lg:max-w-[500px] object-contain"
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <h2 className="text-[#605dba] font-semibold text-lg sm:text-xl leading-snug">
            Why Choose Us?
          </h2>
          <h1 className="text-[#343f52] font-semibold text-[22px] sm:text-[32px] leading-snug w-full mt-4">
            So here a few reasons
            <br />
            why our valued
            <br />
            customers choose us.
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg   border-none pt-2 text-left"
              >
                <div className="flex items-center gap-3">
                  <img src={feature.img} alt={feature.title} className="h-9" />
                  <h1 className="text-[#343f52] font-semibold text-[20px]">
                    {feature.title}
                  </h1>
                </div>

                <p className="text-[#6c7485] text-[16px] leading-relaxed mt-2 ml-[42px] lg:ml-[46px] line-clamp-3">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part3;
