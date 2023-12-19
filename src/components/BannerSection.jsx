import React from "react";
import { FaCaretDown } from "react-icons/fa";


const BannerSection = ({ handleExplore }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.justwatch.com/appassets/img/home/global-home-bg-comp.png)",
      }}
      className="w-full h-[550px] sm:h-[100vh] bg-no-repeat bg-cover bg-center border-b-2 border-emerald-400 sm:pb-7"
    >
      <div className="p-5 flex-col justify-between h-[65%] pt-14 sm:pt-2 lg:pt-[70px]">
        <h1 className="text-emerald-300 text-3xl font-bold mt-[30px] sm:mt-[50px] w-[80%] mx-auto sm:text-3xl md:text-4xl lg:text-5xl">
          Explore Films, Embrace Stories ,Your Movie Journey Begins Here.
        </h1>

        <button
          className="bg-emerald-400 mt-[100px] flex rounded-sm text-white font-bold text-xl p-3 justify-center w-[50%] mx-auto sm:w-[30%] md:w-[25%] lg:w-[18%]"
          onClick={() => handleExplore()}
        >
          Explore Movie <FaCaretDown className="h-[20px] my-auto"/>
        </button>
      </div>
    </div>
  );
};
export default BannerSection;
