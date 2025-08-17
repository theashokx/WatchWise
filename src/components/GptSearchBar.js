import React from "react";
import { Search } from "lucide-react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-40">
      <form className="flex items-center justify-center gap-2 p-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder={lang[langKey].gptPlaceholder}
            className="w-full pl-10 pr-4 py-2 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600 transition">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
