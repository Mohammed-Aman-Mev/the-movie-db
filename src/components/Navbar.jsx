import React from "react";
import logo from "../assets/logo-removebg-preview.png";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TbFilter } from "react-icons/tb";
import { pathandPage } from "./constant";
import LinkandPage from "./LinkandPage";
// import pageandPath from "./constant.js";

const Navbar = ({ setToggle, checkSetopen }) => {
  return (
    <nav className="z-20 w-[100%] h-[50px] flex rounded-b-xl items-center justify-between px-2 sm:px-5 text-xl m-0 sticky top-0 bg-black p-3 xl:h-[100px]">
      <div className="w-auto flex">
        <div className="">
          <button
            onClick={() => {
              checkSetopen();
            }}
          >
            <TbFilter color="white" size={"20px"} />
          </button>
        </div>
        <div className="w-[40px] rounded-full sm:w-[18%] md:w-[15%] lg:w-[15%]">
          <NavLink to={"/"}>
            <img src={logo} alt="" className="w-[100%] rounded-full" />
          </NavLink>
        </div>
      </div>
      <div className="sm:w-[90%] md:w-[70%] block">
        <div className="w-full p-[2.5%] justify-between hidden px-8 sm:flex items-center">
          <ul className="flex justify-between w-full">
            {pathandPage.map((item, ind) => (
              <LinkandPage item={item} key={ind} />
            ))}

            <button
              className="hidden sm:flex"
              onClick={() => setToggle("flex-col")}
            >
              <FaSearch color="white" />
            </button>
          </ul>
        </div>
      </div>
      <div className="pr-5 sm:hidden">
        <button
          className="block sm:hidden"
          onClick={() => setToggle("flex-col")}
        >
          <FaSearch color="white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
