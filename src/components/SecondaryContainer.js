import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black ">
      <div className="-mt-72 relative z-20">
        <MovieList title={"New Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Recommended"} movies={movies.trendingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
