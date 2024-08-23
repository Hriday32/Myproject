import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import NavLinks from "../../Data/Data.js";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";

const Hamburger = ({ isHamburgerVisible, setisHamburgerVisible }) => {
  const Navigate = useNavigate();

  const handleCloseMenu = () => {
    setisHamburgerVisible(false);
  };
  return (
    <>
      <div
        className={`hamburger-container  w-[80%] h-screen hidden max-lg:block overflow-hidden bg-[#2d2d2d] absolute left-0 top-0 p-16 pr-0 max-[440px]:p-5 transition-all duration-150 ease-in-out z-50 translate-x-[-100%] ${
          isHamburgerVisible
            ? " translate-x-[0]"
            : " translate-x-[-100%] max-lg:block"
        }`}
      >
        <div className="flex justify-between">
          <div className="profile  justify-center items-center hidden gap-2  max-[440px]:flex max-[440px]:justify-start max-[440px]:items-center max-[440px]:ml-[-10px] ">
            <Link to="/Login">
              <FaRegCircleUser className="text-5xl text-slate-300 rounded-full object-left" />
            </Link>
          </div>
          <div>
            <button onClick={() => handleCloseMenu()} className="text-5xl">
              <RxCrossCircled className="text-5xl text-black bg-white rounded-full object-left" />
            </button>
          </div>
        </div>

        <ul className="max-[440px]:mt-10">
          {NavLinks.map((links) => (
            <Link className="" to={links.link} key={links}>
              <li className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out text-white mb-8 font-bold">
                {links.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
