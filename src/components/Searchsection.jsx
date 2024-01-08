import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Search_multi, setSearchPage, setstr } from "../service/movieSlice";
import { pathandPage } from "./constant";
import LinkandPage from "./LinkandPage";

const searchSection = ({ toggle, setToggle }) => {
  const page = 1;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const set_Toggle = (e) => {
    e.stopPropagation();

    if (e.target.tagName === "DIV" || e.target.tagName === "INPUT")
      setToggle("flex-col");
    else setToggle("hidden");
  };

  const searchNow = (e) => {
    e.preventDefault();
    dispatch(setstr(input));
    dispatch(Search_multi([input, page]));
    dispatch(setSearchPage(page));
    navigate(`/searchMulti/str:${input}`);
    setInput("");
  };

  return (
    <div
      className={`${toggle} p-5 bg-gray-900 items-center bg-gradient-to-b from-gray-950 rounded-lg top-0 w-full z-20 flex-col bg-transparent px-auto fixed h-full mt-8`}
      onClick={(e) => set_Toggle(e)}
    >
      <div className="w-[90%] bg-gray-950 mx-auto rounded-lg p-3 bg-opacity-70 sm:w-[60%] md:w-[50%] lg:w-[40%]">
        <div className="w-[250px] mx-auto px-2 flex mt-6 justify-between sm:w-[70%] md:px-10 lg:px-10">
          <form action="" onSubmit={(e) => searchNow(e)}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              onClick={() => setToggle("hidden")}
              className="p-1 rounded-full"
              type="submit"
            >
              <FaSearch color="white" />
            </button>
          </form>
        </div>
        <div className="w-[50%] p-5 justify-between mx-auto lg:px-10">
          <ul className="flex-col justify-between w-full">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive ? "text-white" : "text-gray-500"
              }
            >
              <li className="font-bold">Home</li>
            </NavLink>
            <NavLink
              to={"/Popular"}
              className={({ isActive, isPending }) =>
                isActive ? "text-white" : "text-gray-500"
              }
            >
              <li className="font-bold">Popular</li>
            </NavLink>
            {pathandPage.map((item, ind) => (
              <LinkandPage item={item} key={ind} />
            ))}
            <div className="pt-5 w-4">
              <IoMdCloseCircleOutline color="white" size={"30px"} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default searchSection;
