import { useEffect } from "react";
import { addPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOWPLAYING_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOWPLAYING_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
