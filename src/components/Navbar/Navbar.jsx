import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const [isHamburgerVisible, setisHamburgerVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuToggle(!isMenuToggle);
  };

  const toggleHamburger = () => {
    setisHamburgerVisible(!isHamburgerVisible);
  };

  return (
    <>
      <div
        className="flex justify-between bg-violet-400 sticky end-0 w-full "
        style={{ zIndex: "1000" }}
      >
        <div className="left-nav mx-5 max-md:hidden">
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
            className="menu-icon hidden max-md:block w-7  p-2"
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

        <div className="flex justify-center items-center gap-2 mx-5 ">
          <Link to="/login">
            <div className="log-in font-bold text-white text-2xl flex gap-1 hover:text-[#DC2D13] transition-all duration-150 ease-in-out">
              <i className="ri-login-box-line"></i>
              <p>Log In</p>
            </div>
          </Link>
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
