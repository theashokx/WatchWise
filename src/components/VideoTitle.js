import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 py-12  w-screen aspect-video absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-4xl font-bold ml-5">{title}</h1>
      <p className=" text-lg w-1/3 m-2 ml-6">{overview}</p>
      <div>
        <button className="bg-white ml-5 text-black rounded-lg p-4 px-12 text-xl  m-2 hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 ml-5 bg-white text-black rounded-lg p-4 px-12 text-xl  m-2 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
