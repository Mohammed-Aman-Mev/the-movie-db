import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MovieCard } from "../components";
import {
  Search_multi,
  setFilterData,
  setRoute,
  setSearchPage,
} from "../service/movieSlice";

const SearchMovie = () => {
  const searchData = useSelector((state) => state.movieData.search);
  let page = useSelector((state) => state.movieData.searchPage);
  const input = useSelector((state) => state.movieData.str);
  const Route = useSelector((state) => state.movieData.route);
  const ImgUrl = useSelector((state) => state.movieData.imageURL);
  const dispatch = useDispatch();

  // console.log(input)
  // console.log(page)
  const setPathRoute = (id) => {
    dispatch(setRoute(id));
  };

  const pagination = () => {
    dispatch(Search_multi([input, page]));
    dispatch(setSearchPage(page + 1));
    dispatch(setFilterData(searchData));
  };

  return (
    <div className="bg-black">
      {searchData ? (
        <div className="pt-6 w-[100%] mx-auto">
          <h1 className="text-emerald-300 text-center text-3xl bg-black font-semibold">
            Search.
          </h1>
          <div className="bg-black sm:p-5 w-[100%] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {searchData.length === 0 ? (
              <h1 className="text-emerald-400 text-center text-7xl w-[200px] mx-auto mt-[100px]">
                search not Found...
              </h1>
            ) : (
              searchData.map((i) => (
                <Link
                  to={`/MovieDetailes/id:${Route}`}
                  key={i.id}
                  onMouseOver={() => setPathRoute(i.id)}
                >
                  <MovieCard data={i} imgUrl={ImgUrl} />
                </Link>
              ))
            )}
          </div>
          <div className="w-full bg-gray-800 p-5 flex items-center justify-center">
            <button
              className="bg-emerald-500 flex justify-center items-center text-white text-sm font-semibold rounded-sm p-2"
              onClick={() => pagination()}
            >
              More movies...
            </button>
          </div>
          <div className="w-full bg-gray-900 h-64"></div>
        </div>
      ) : (
        <h1 className="text-center text-white text-4xl">Loading...</h1>
      )}
    </div>
  );
};

export default SearchMovie;
