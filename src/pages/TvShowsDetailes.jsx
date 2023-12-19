import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tv_detailes_by_id } from "../service/movieSlice";

const TvShowsDetailes = () => {
  // const tvDetailes = useSelector((state) => state.movieData.tvDetailes);
  const tvDetailes = useSelector((state) => state.movieData.tvDetailes);
  const Route = useSelector((state) => state.movieData.route);
  const Img = useSelector((state) => state.movieData.imageURL);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Tv_detailes_by_id(Route));
  }, []);
  return (
    <div className="text-white">
      {tvDetailes ? (
        <div>
          <div
            className="bg-black w-full h-[500px] sm:h-[500px] bg-no-repeat bg-contain bg-center flex items-center justify-center md:h-[700px]"
            style={{
              backgroundImage: `url(${Img + tvDetailes.poster_path})`,
            }}
          ></div>
          <div className="bg-black w-full h-[500px] sm:h-[500px] bg-no-repeat bg-contain bg-center flex items-center justify-center md:h-[700px]">
            <div
              className="text-emerald-500 text-xl w-full h-[500px] bg-no-repeat bg-cover bg-center p-3"
              style={{
                backgroundImage: `url(${Img + tvDetailes.poster_path})`,
              }}
            >
              <div className="bg-gray-800 opacity-600 bg-opacity-95 p-5 rounded-md">
                <h1>Title : {tvDetailes.original_name}</h1>
                <h1>Rating : {tvDetailes.vote_average}</h1>
                <h1>Status : {tvDetailes.status}</h1>
                <h1>
                  Genere :[
                  {tvDetailes.genres.map((i) => (
                    <p key={i.id}>{i.name},</p>
                  ))}
                  ]
                </h1>
                <h1>Released Date : {tvDetailes.release_date}</h1>
                <h1>{tvDetailes.overview}</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default TvShowsDetailes;
