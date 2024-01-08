import React, { useEffect, useState } from "react";

import { FaPlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { VideoPlay } from "../components";
import {
  Movie_detailes_by_id,
  Video_detailes_by_id,
} from "../service/movieSlice";

const MovieDetailes = () => {
  const [togglePlayer, setTogglePlayer] = useState(true);
  const ImageUrl = useSelector((state) => state.movieData.imageURL);
  const id = useSelector((state) => state.movieData.route);
  const dispatch = useDispatch();

  const movieDetaile = useSelector((state) => state.movieData.movieDetailes);
  const videoDetaile = useSelector((state) => state.movieData.videoDetaile);

  const playVideo = () => {
    setTogglePlayer(false);
  };

  useEffect(() => {
    dispatch(Movie_detailes_by_id(id));
    dispatch(Video_detailes_by_id(id));
  }, []);

  return (
    <>
      {movieDetaile ? (
        <div className="">
          <div
            className={
              togglePlayer
                ? "bg-black w-full h-[500px] sm:h-[500px] bg-no-repeat bg-contain bg-center flex items-center justify-center md:h-[700px]"
                : "hidden"
            }
            style={{
              backgroundImage: `url(${ImageUrl + movieDetaile.poster_path})`,
            }}
          >
            <FaPlay
              size={"20%"}
              color="white"
              onClick={() => playVideo()}
              className="z-10"
            />
          </div>
          <div
            className={
              togglePlayer === false
                ? "flex items-center justify-center w-full h-[100vh] sm-h-[50%]"
                : "hidden"
            }
          >
            {videoDetaile && videoDetaile.trailer ? (
              <VideoPlay
                video_id={videoDetaile.trailer}
                alldata={videoDetaile}
                prop1={togglePlayer}
              />
            ) : (
              <h1 className="text-white">video trailer not found...</h1>
            )}
          </div>
          <div
            className="text-emerald-500 text-xl w-full bg-no-repeat bg-cover bg-center p-3"
            style={{
              backgroundImage: `url(${ImageUrl + movieDetaile.poster_path})`,
            }}
          >
            <div className="bg-gray-800 opacity-600 bg-opacity-95 p-5 rounded-md">
              <h1>Title : {movieDetaile.original_title}</h1>
              <h1>Rating : {movieDetaile.vote_average}</h1>
              <h1>
                Genere :[
                {movieDetaile.genres.map((i) => (
                  <p key={i.id}>{i.name},</p>
                ))}
                ]
              </h1>
              <h1>Status : {movieDetaile.status}</h1>
              <h1>Released Date : {movieDetaile.release_date}</h1>
              <h1>{movieDetaile.overview}</h1>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-white">Loading...</h1>
      )}
    </>
  );
};

export default MovieDetailes;
