import React from "react";
import { IoPlayCircle } from "react-icons/io5";
import { MdOutlineImageNotSupported } from "react-icons/md";

const MovieCard = ({ data, imgUrl }) => {
  return (
    <div className="bg-gray-950 rounded-2xl sm:p-3 text-sm font-semibold text-emerald-500 max-w-[270px] mx-auto">
      <div
        className="w-[255px] h-[300px] mx-auto bg-gray-900 rounded-xl  p-2 bg-center bg-cover shadow-xl"
        style={{
          backgroundImage: `url(${imgUrl}${data.poster_path})`,
        }}
      >
        {data.poster_path ? (
          <img
            src={imgUrl + data.poster_path}
            alt="Image"
            className="rounded-xl"
          />
        ) : (
          <MdOutlineImageNotSupported size={"240px"} />
        )}
      </div>
      <div className="">
        <div className="flex w-[255px] justify-between">
          <div className="w-[32%] h-[35%] inline-block rounded-md relative top-[-40px] left-[20px]">
            {data.poster_path ? (
              <img src={imgUrl + data.poster_path} alt="image" />
            ) : (
              <MdOutlineImageNotSupported />
            )}
          </div>
          <div className="inline-block w-[50%]">
            <IoPlayCircle
              color="red"
              size={"50%"}
              className="relative z-[1] top-[6px] right-[-60px]"
            />
            <h3 className="text-rose-500 text-lg truncate">
              {data.original_title ? data.original_title : data.name}
            </h3>
            <h3 className="">{data.vote_average}</h3>
          </div>
        </div>
        <div>
          <ul className="flex justify-between p-1">
            <li>{data.original_language === "en" ? "English" : "Other"}</li>
            <li>{data.media_type}</li>
            <li>{data.release_date}</li>
          </ul>
          <ul className="flex justify-between p-1">
            {data.genres
              ? data.genres.map((i) => <li key={i.id}>{i.name},</li>)
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

// adult(pin):false
// backdrop_path(pin):"/5XVWHz5yiRoij9pW3Gb7qaeEYuu.jpg"
// id(pin):121659
// name(pin):"Yu Yu Hakusho"
// original_language(pin):"ja"
// original_name(pin):"幽☆遊☆白書"
// overview(pin):"After a selfless act costs him his life, teen delinquent Yusuke Urameshi is chosen as a Spirit Detective to investigate cases involving rogue yokai."
// poster_path(pin):"/t9WiCEnojzksL3crxiCt7HIda8p.jpg"
// media_type(pin):"tv"
// popularity(pin):93.425
// first_air_date(pin):"2023-12-14"
// vote_average(pin):8.417
// vote_count(pin):12
