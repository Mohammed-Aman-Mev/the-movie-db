import React from "react";

const VideoPlay = ({ prop1, alldata }) => {
  return (
    <>
      <div className={prop1 === false ? "w-[100%] h-[100%]" : "hidden"}>
        <iframe
          className="w-[100%] h-[100vh]"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${alldata.trailer.youtube_video_id}?autoplay=1`}
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlay;
