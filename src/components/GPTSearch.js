import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieRecommendations from "./GptMovieRecommendations";
import { BACKGROUND_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_URL} alt="background" />
      </div>
      <GptSearchBar />

      <GptMovieRecommendations />
    </div>
  );
};

export default GPTSearch;
