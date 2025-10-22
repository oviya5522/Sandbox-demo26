import React from "react";
import logo from "../assets/logo.png";
import { PiMapPinLineFill, PiPhoneCall } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 pr-12 lg:py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start px-8 md:px-16 gap-8">
          {/* logo */}
          <div className="mb-6 md:mb-0 md:w-[40%] py-5">
            <img src={logo} alt="Logo" className="h-7" />
            <p className="pt-5 text-[19px] font-medium text-[#6c7485] leading-[1.7] max-w-full text-left">
              We are trusted by over 5000+ clients. Join them by using our
              services and grow your business
            </p>
          </div>

          {/* phone ans contact */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 md:w-auto">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <PiPhoneCall className="w-6 h-6 text-[#605dba]" />
                <h1 className="text-[20px] font-semibold text-[#555c6b]">
                  Phone
                </h1>
              </div>

              <div className="flex flex-col mt-1 ml-[28px]">
                <p className="text-[19px] font-medium text-[#6c7485]">
                  00 (123) 456 78 90
                </p>
                <p className="text-[19px] font-medium text-[#6c7485]">
                  00 (987) 654 32 10
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <PiMapPinLineFill className="w-6 h-6 text-[#605dba]" />
                <h1 className="text-[20px] font-semibold text-[#555c6b]">
                  Address
                </h1>
              </div>

              <div className="flex flex-col mt-1 ml-[28px]">
                <p className="text-[19px] font-medium text-[#6c7485] leading-[1.4]">
                  Moonshine St. 14/05 Light
                </p>
                <p className="text-[19px] font-medium text-[#6c7485] leading-[1.4]">
                  City, London, United
                </p>
                <p className="text-[19px] font-medium text-[#6c7485] leading-[1.4]">
                  Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6">
          <span className="text-[17px] font-medium text-[#6c7485] text-left md:pl-15">
            © 2024{" "}
            <a className="hover:underline text-[17px] font-medium text-[#6c7485]">
              Sandbox
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transition-transform duration-300 hover:-translate-y-1"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#5daed5"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transition-transform duration-300 hover:-translate-y-1"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#4470cf"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transition-transform duration-300 hover:-translate-y-1"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#e94d88"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <FaInstagram className="text-[#d53581] hover:-translate-y-1 transition-transform duration-300" />

            <AiFillYoutube className="text-[#d53581] hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
