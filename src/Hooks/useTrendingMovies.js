import { useEffect } from "react";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const useTrendingMovies = useSelector(
    (store) => store.movies.useTrendingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !useTrendingMovies && getNowPlayingMovies();
  }, []);
};

export default useTrendingMovies;
