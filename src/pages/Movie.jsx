import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Get_only_movies,
  Movie_detailes_by_id,
  Video_detailes_by_id,
  setAllMoviesPage,
  setFilterData,
  setRoute,
} from "../service/movieSlice";
import { Link } from "react-router-dom";
import { MovieCard } from "../components";

const Movie = () => {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movieData.allMovies);
  const Route = useSelector((state) => state.movieData.route);
  const ImgUrl = useSelector((state) => state.movieData.imageURL);
  let page = useSelector((state) => state.movieData.allMoviesPage);

  const pagination = () => {
    dispatch(setAllMoviesPage());
    page++;
    dispatch(Get_only_movies(page));
  };

  const setPathRoute = (id) => {
    dispatch(setRoute(id));
  };

  useEffect(() => {
    if (allMovies === null) dispatch(Get_only_movies(page));

    dispatch(setFilterData(allMovies));
  }, [page]);

  return (
    <div className="bg-black">
      {allMovies ? (
        <div className="pt-6 w-[100%] mx-auto">
          <h1 className="text-emerald-300 text-center text-3xl bg-black font-semibold">
            Movies.
          </h1>
          <div className="bg-black sm:p-5 w-[100%] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allMovies.length === 0 ? (
              <h1 className="text-emerald-400 text-center text-7xl w-[200px] mx-auto mt-[100px]">
                Loading...
              </h1>
            ) : (
              allMovies.map((i, j) => (
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
              {/* <MdMoreHoriz color="black"/> */}
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

export default Movie;
