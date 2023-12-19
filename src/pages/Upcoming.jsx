import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MovieCard } from "../components";
import { Get_only_upcoming, setFilterData, setRoute, setUpcomingPage } from "../service/movieSlice";

const Upcoming = () => {
  const upComing = useSelector((state) => state.movieData.upComing);
  const Route = useSelector((state) => state.movieData.route);
  const ImgUrl = useSelector((state) => state.movieData.imageURL);
  let page= useSelector((state) => state.movieData.upComingPage);
  const dispatch = useDispatch();

  const setPathRoute = (id) => {
    dispatch(setRoute(id));
  };
  

  const pagination = () => {
    dispatch(setUpcomingPage());
    page--;

    dispatch(Get_only_upcoming(page));
  };

  const checkRoutepath = (i) => {
    if (i.media_type === "movie") {
      return (
        <Link
          to={`/MovieDetailes/id:${Route}`}
          key={i.id}
          onMouseOver={() => setPathRoute(i.id)}
        >
          <MovieCard data={i} imgUrl={ImgUrl} />
        </Link>
      );
    } else {
      return (
        <Link
          to={`/TvShowDetailes/id:${Route}`}
          key={i.id}
          onMouseOver={() => setPathRoute(i.id)}
        >
          <MovieCard data={i} imgUrl={ImgUrl} />
        </Link>
      );
    }
  };

  useEffect(() => {
    if (upComing === null) dispatch(Get_only_upcoming(page));
    dispatch(setFilterData(upComing))
  }, []);
  return (
    <div className="bg-black">
      {upComing ? (
        <div className="pt-6 w-[100%] mx-auto">
          <h1 className="text-emerald-300 text-center text-3xl bg-black font-semibold">
            Upcoming.
          </h1>
          <div className="bg-black p-5 w-[100%] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {upComing.length === 0 ? (
              <h1 className="text-emerald-400 text-center text-7xl w-[200px] mx-auto mt-[100px]">
                Loading...
              </h1>
            ) : (
              upComing.map(checkRoutepath)
            )}
          </div>
          <div className="w-full bg-gray-800 p-5 flex items-center justify-center">
            <button
              className="bg-emerald-500 flex justify-center items-center text-white text-sm font-semibold rounded-sm p-2"
              onClick={() => pagination()}
            >
              More...
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

export default Upcoming;
