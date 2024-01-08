import React from "react";
import { NavLink } from "react-router-dom";

const LinkandPage = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive, isPending }) =>
        isActive ? "text-white border-b-2 border-emerald-500" : "text-gray-500"
      }
    >
      <li className="text-[14px] font-semibold lg:text-[17px] 2xl:text-3xl">
        {item.page}
      </li>
    </NavLink>
  );
};

export default LinkandPage;
