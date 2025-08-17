import React from "react";
import { Search } from "lucide-react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import genAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };

  const handleSearchButton = async () => {
    const gptQuery =
      "Act like a movie recommendation system and suggest me some movies for the query: " +
      searchText.current.value +
      ". Only give me names of five movies, comma separated like the example result given ahead. Example result: Gadar, Don, Sholay, Sardar, Rani Raja";

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(gptQuery);

    const gptMovies = result.response.text().split(",");
    console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) => searchMovies(movie));
    const dataArray = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: dataArray })
    );
  };

  return (
    <div className="pt-40">
      <form
        className="flex items-center justify-center gap-2 p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative w-full max-w-md">
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].gptPlaceholder}
            className="w-full pl-10 pr-4 py-2 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600 transition"
          onClick={handleSearchButton}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
