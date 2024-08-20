import React from "react";
import bgImg from "../Footer/Footer bg.jpeg";
import logo from "../../assets/Logo.png";

import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialIcons = [
  {
    icon: <CiTwitter className="w-5 h-5" />,
  },
  {
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
  },
];

function Footer() {
  return (
    <div>
      <div className="footer-container w-full h-[90vh] absolute mt-10">
        <div className="w-full h-full bg-yellow-400">
          <img
            src={bgImg}
            className="w-full h-full object-cover bg-no-repeat"
            alt=""
          />

          <div className="bg-[#000000c7] w-full h-full absolute top-0 flex flex-col justify-center items-center">
            <img src={logo} alt="" className="w-20" />

            <p className="text-gray-300 text-base font-light mt-10 tracking-widest">
              : SHOWROOM LOCATION :
            </p>
            <h1 className="text-white text-base font-medium mt-2 max-sm:w-[70%] text-center">
              35 koteshwor, kathmandu -Nepal
            </h1>

            <div className="company-info text-white flex items-center gap-4 justify-between w-[80%] mt-20">
              <p className="font-bold">
                <span className="text-gray-300 font-medium tracking-wider">
                  PHONE:
                </span>{" "}
                +977 9819604968
              </p>
              <p className="font-bold">
                <span className="text-gray-300 font-medium tracking-wider">
                  FAX:
                </span>{" "}
                +977 9819604968
              </p>
              <p className="font-bold">
                <span className="text-gray-300 font-medium tracking-wider">
                  EMAIL{" "}
                </span>{" "}
                : r@gmail.com
              </p>
            </div>

            <div className="social-icons text-white flex items-center gap-4 mt-20">
              {socialIcons.map((item, index) => (
                <div
                  className="w-10 h-10 bg-transparent rounded-full border-2 border-white flex items-center justify-center  hover:bg-white hover:text-black transition-all duration-150 ease-in-out"
                  key={index}
                >
                  {item.icon}
                </div>
              ))}
            </div>

            <p className="text-white text-xs mt-20 tracking-widest max-sm:tracking-normal max-sm:text-center max-sm:w-[70%]">
              COPYRIGHT © 2024 AUTOZONE BEST CAR RENTAL PRICE. ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </div>
      </div>

      
     
    </div>
  );
}

export default Footer;
