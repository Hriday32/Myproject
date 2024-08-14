import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import RentalFleets from "../Rental fleets/RentalFleets";

function Navbar() {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const [isHamburgerVisible, setisHamburgerVisible] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(window.scrollY > 100);

  const toggleMenu = () => {
    setIsMenuToggle(!isMenuToggle);
  };

  const toggleHamburger = () => {
    setisHamburgerVisible(!isHamburgerVisible);
  };

  return (
    <>
      <div className="flex justify-between top-[2%] z-50 bg-violet-400">
        <div className="left-nav mx-5">
          <Link to="/">
            <img src={Logo} alt="" className="w-24 p-4" />
          </Link>
        </div>

        <div className=" text-white flex  gap-10  justify-between">
          <ul className="flex items-center gap-4 text-sm font-bold max-md:hidden ">
            <Link
              className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out"
              to="/"
            >
              <li>HOME</li>
            </Link>
            <Link
              className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out"
              to="/ourCars"
            >
              <li>OUR CARS</li>
            </Link>
            <Link
              className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out"
              to="/ourNews"
            >
              <li>OUR NEWS</li>
            </Link>
            <Link
              className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out"
              to="/contact"
            >
              <li>CONTACT</li>
            </Link>
          </ul>

          <div
            className="menu-icon hidden max-md:block w-7  "
            onClick={toggleHamburger}
          >
            {isMenuToggle ? (
              <i
                className="ri-menu-2-line text-xl cursor-pointer"
                onClick={toggleMenu}
              ></i>
            ) : (
              <i
                className="ri-menu-line text-xl cursor-pointer max-lg:mr-[-40px]"
                onClick={toggleMenu}
              ></i>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mx-5 max-[440px]:hidden">
          <Link to="/login">
            <i className="ri-user-line bg-white text-black p-2 text-sm rounded-full hover:bg-[#DC2D13] hover:text-white transition-all duration-150 ease-in-out ">
              {" "}
            </i>
          </Link>
          <div className="profile-dets ">
            {/* <p className="text-white font-bold">HI, USER</p> */}
            <Link to="/login">
              <div className="log-in font-bold text-white text-2xl flex gap-1 hover:text-[#DC2D13] transition-all duration-150 ease-in-out">
                <i className="ri-login-box-line"></i>
                <p>Log In</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Hamburger
        setisHamburgerVisible={setisHamburgerVisible}
        isHamburgerVisible={isHamburgerVisible}
      />
    </>
  );
}

export default Navbar;
