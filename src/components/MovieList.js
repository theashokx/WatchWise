import React from "react";
import MovieCard from "./MovieCard";
import ShimmerCards from "./ShimmerCards";

const MovieList = ({ title, movies }) => {
  if (!title) return <ShimmerCards />;
  return (
    <div className="px-6">
      <h1 className="text-white  6xl  py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex  ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
