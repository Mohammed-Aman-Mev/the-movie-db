import React from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const Filter = ({ open, checkSetopen }) => {
  const data = useSelector((state) => state.movieData.filter);

  const filter = (e) => {
    e.preventDefault();
    
  };
  return (
    <div
      className={`${open} pt-3 sm:p-5 bg-gray-900 items-center bg-gradient-to-b from-gray-950 rounded-lg top-0 w-full z-20 rounded-b-xl flex-col bg-transparent px-auto fixed h-full`}
    >
      <div className="bg-gray-900 text-white w-[100vw] p-2 rounded-b-xl bg-opacity-70 mx-auto sm:w-[70%]">
        <div className="p-4">
          <form action="" onSubmit={filter}>
            <label htmlFor="HTML" className="flex justify-between">
              Title:
            </label>
            <input className="w-[65%]" type="text" placeholder="type" />
            <label htmlFor="HTML" className="flex justify-between">
              Type:
            </label>
            <input className="w-[65%]" type="text" placeholder="Movie or Tv" />
            <label htmlFor="HTML" className="flex justify-between">
              Rate:
            </label>
            <input className="w-[65%]" type="text" placeholder="1/10" />
            <label htmlFor="HTML" className="flex justify-between">
              Release_date :
            </label>
            <input className="w-[65%]" type="text" placeholder="YYYY-MM-DD" />
            <br />
            <button
              type="submit"
              className="w-[35%] m-3 mx-auto bg-slate-400 p-2 "
            >
              Filter
            </button>
          </form>
        </div>
        <div
          onClick={() => checkSetopen()}
          className="w-auto rounded-md mx-auto flex items-center justify-center bg-slate-700"
        >
          Close
          <IoClose size={"30px"} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
