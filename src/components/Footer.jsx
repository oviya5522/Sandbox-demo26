import React from "react";
import logo from "../assets/logo.png";
import { PiMapPinLineFill } from "react-icons/pi";
import { PiPhoneCall } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";


const Footer = () => {
  return (
    <div>
      <footer class="bg-white">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6  lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 pl-19 pb-20">
              <img src={logo} alt="" className="h-7" />
              <p class=" pt-5 text-[19px] font-medium text-[#6c7485] w-90 leading-[1.7]">
                We are trusted by over 5000+ clients. Join them by using our
                services and grow your business
              </p>
            </div>
            <div className="flex gap-10">
              <div>
                <h1 className=" text-[20px] font-semibold  text-[#555c6b] flex justify-start gap-3"><span className=""><PiPhoneCall className="w-8 h-8 text-[#605dba]"/></span> Phone</h1>
                <p className="text-[19px] font-medium text-[#6c7485] pl-10">
                      00 (123) 456 78 90
                    </p>
                     <p className="text-[19px] font-medium text-[#6c7485] pl-10">
                      00 (987) 654 32 10
                    </p>
              </div>
             <div>
                <h1 className=" text-[20px] font-semibold  text-[#555c6b] flex justify-start gap-3 "><span className="pt-2"><PiMapPinLineFill className="w-6 h-6 text-[#605dba] " /></span> Address</h1>
                 <p className="text-[19px] font-medium text-[#6c7485] w-90 leading-[1.4] pl-10">
                    Moonshine St. 14/05 Light <br />
                    City, London, United
                    <br /> Kingdom
                  </p>
              </div>
            </div>

          </div>
<hr class="pt-4 border-gray-200 sm:mx-auto  lg:my-8" />         
 <div class="sm:flex sm:items-center sm:justify-between  pl-15">
            <span class="text-[17px] font-medium text-[#6c7485]">
              © 2024{" "}
              <a  class="hover:underline text-[17px] font-medium text-[#6c7485] ">
                Sandbox
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0 pr-20">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 hover:scale-100 hover:translate-y-[-3px]
         transition-transform duration-300"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#5daed5"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
               <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 hover:scale-100 hover:translate-y-[-3px]
         transition-transform duration-300"
              >
                 <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4470cf"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
             
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 hover:scale-100 hover:translate-y-[-3px]
         transition-transform duration-300"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#e94d88"
                  viewBox="0 0 20 20"
                  
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
               <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <span>

                <FaInstagram className="text-[#d53581] hover:scale-100 hover:translate-y-[-2px]
         transition-transform duration-300"/>
                </span>
                <span class="sr-only">Instagram</span>
              </a>
               <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 "
              >
                <span>
                  <AiFillYoutube className="text-[#d53581] hover:scale-100 hover:translate-y-[-2px]
         transition-transform duration-300"/>
               
                </span>
                <span class="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
