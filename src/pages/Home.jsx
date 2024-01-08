import React, { useEffect, useRef, useState } from "react";
import { BannerSection, MovieCard, NowPlaying } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { MdMoreHoriz } from "react-icons/md";

import {
  Movie_detailes_by_id,
  Trending_movie_tv,
  Video_detailes_by_id,
  setFilterData,
  setRoute,
  setTrandingMoviesdata,
  setTrendingMoviesPage,
} from "../service/movieSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const trendingMovies = useSelector((state) => state.movieData.trendingMovies);
  const ImgUrl = useSelector((state) => state.movieData.imageURL);
  let page = useSelector((state) => state.movieData.trendingMoviesPage);
  const Route = useSelector((state) => state.movieData.route);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const pagination = () => {
    dispatch(setTrendingMoviesPage());
    page++;
    dispatch(Trending_movie_tv(page));
  };

  const handleExplore = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!trendingMovies) dispatch(Trending_movie_tv(page));

    dispatch(setFilterData(trendingMovies));
  }, [page]);

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

  return (
    <div className="bg-black">
      <BannerSection handleExplore={handleExplore} />
      {trendingMovies ? (
        <div className="pt-6 w-[100%] mx-auto">
          <h1 className="text-emerald-300 text-center text-3xl bg-black font-semibold">
            Trending Movies and Tv shows.
          </h1>
          <div
            ref={ref}
            className="bg-black p-5 w-[100%] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
          >
            {trendingMovies.length === 0 ? (
              <h1 className="text-emerald-400 text-center text-7xl w-[200px] mx-auto mt-[100px]">
                Loading...
              </h1>
            ) : (
              trendingMovies.map(checkRoutepath)
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

export default Home;
