import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MovieCard } from "../components";
import {
  Get_all_tv_shows,
  Tv_detailes_by_id,
  setAllTvShowsPage,
  setFilterData,
  setRoute,
} from "../service/movieSlice";

const TvShows = () => {
  const allTvshows = useSelector((state) => state.movieData.allTvshows);
  let page = useSelector((state) => state.movieData.allTvshowsPage);
  const Route = useSelector((state) => state.movieData.route);
  const ImgUrl = useSelector((state) => state.movieData.imageURL);

  const dispatch = useDispatch();

  const pagination = () => {
    dispatch(setAllTvShowsPage());
    page++;

    dispatch(Get_all_tv_shows(page));
  };

  const setPathRoute = (id) => {
    dispatch(setRoute(id));
  };

  useEffect(() => {
    if (!allTvshows) dispatch(Get_all_tv_shows(page));
    dispatch(setFilterData(allTvshows));
  }, [page]);

  return (
    <div className="bg-black">
      {allTvshows ? (
        <div className="pt-6 w-[100%] mx-auto">
          <h1 className="text-emerald-300 text-center text-3xl bg-black font-semibold">
            Tv Shows.
          </h1>
          <div className="bg-black sm:p-5 w-[100%] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allTvshows.length === 0 ? (
              <h1 className="text-emerald-400 text-center text-7xl w-[200px] mx-auto mt-[100px]">
                Loading...
              </h1>
            ) : (
              allTvshows.map((i) => (
                <Link
                  to={`/TvShowDetailes/id:${Route}`}
                  key={i.id}
                  onMouseOver={() => setPathRoute(i.id)}
                  // onClick={() => {
                  //   handleDetaile(i.id);
                  // }}
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
              More shows...
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

export default TvShows;
