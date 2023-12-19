import React, { useState } from "react";
import { Filter, Movie, Navbar, Searchsection } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  MovieDetailes,
  SearchMovie,
  SearchTvShows,
  Tranding,
  TvShows,
  TvShowsDetailes,
  Upcoming,
} from "./pages";
import { useSelector } from "react-redux";

const App = () => {
  const [toggle, setToggle] = useState("hidden");
  const [open, setOpen] = useState("hidden");
  const setPathRoute = useSelector((state) => state.movieData.route);
  const str = useSelector((state) => state.movieData.str);

  // search_Movie("Raid");
  const checkSetopen = () => {
    if (open === "hidden") setOpen("flex");
    else setOpen("hidden");
  };

  return (
    <BrowserRouter>
      <Navbar
        setToggle={setToggle}
        toggle={toggle}
        checkSetopen={checkSetopen}
      />
      <Searchsection toggle={toggle} setToggle={setToggle} />
      <Filter open={open} checkSetopen={checkSetopen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />

        <Route
          path={`/MovieDetailes/id:${setPathRoute}`}
          element={<MovieDetailes />}
        />
        <Route
          path={`/TvShowDetailes/id:${setPathRoute}`}
          element={<TvShowsDetailes />}
        />
        <Route path="/Popular" element={<Tranding />} />
        <Route path="/TvShows" element={<TvShows />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path={`/searchMulti/str:${str}`} element={<SearchMovie />} />
        {/* <Route path="/searchTvshows" element={<SearchTvShows />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
