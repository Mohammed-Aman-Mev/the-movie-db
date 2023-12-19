import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "../components";
import { Link } from "react-router-dom";
import {
  Only_popular,
  setFilterData,
  setPopularMoviesPage,
  setRoute,
} from "../service/movieSlice";

const Tranding = () => {
  const popularMovies = useSelector((state) => state.movieData.popularMovies);
  const ImgUrl = useSelector((state) => state.movieData.imageURL);
  const Route = useSelector((state) => state.movieData.route);
  let page = useSelector((state) => state.movieData.popularMoviesPage);
  const dispatch = useDispatch();

  const setPathRoute = (id) => {
    dispatch(setRoute(id));
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
    } else if (i.media_type === "tv") {
      return (
        <Link
          to={`/TvShowDetailes/id:${Route}`}
          key={i.id}
          onMouseOver={() => setPathRoute(i.id)}
        >
          <MovieCard data={i} imgUrl={ImgUrl} />
        </Link>
      );
    } else {
      return (
        <Link
          to={`/MovieDetailes/id:${Route}`}
          key={i.id}
          onMouseOver={() => setPathRoute(i.id)}
        >
          <MovieCard data={i} imgUrl={ImgUrl} />
        </Link>
      );
    }
  };

  const pagination = () => {
    dispatch(setPopularMoviesPage());
    page++;
    dispatch(Only_popular(page));
  };

  useEffect(() => {
    if (popularMovies === null) dispatch(Only_popular(page));
    dispatch(setFilterData(popularMovies))
  }, [page]);
  return (
    <div className="bg-black">
      {popularMovies ? (
        <div className="pt-6 w-[100%] mx-auto">
          <h1 className="text-emerald-300 text-center text-3xl bg-black font-semibold">
            Popular Movies and Tv shows.
          </h1>
          <div className="bg-black p-5 w-[100%] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {popularMovies.length === 0 ? (
              <h1 className="text-emerald-400 text-center text-7xl w-[200px] mx-auto mt-[100px]">
                Loading...
              </h1>
            ) : (
              popularMovies.map(checkRoutepath)
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

export default Tranding;
