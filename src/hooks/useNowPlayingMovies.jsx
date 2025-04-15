import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayingMovies } from "../utils/movieSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );

      const data = response.data;
      dispatch(addPlayingMovies(data?.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies]);

  return nowPlayingMovies;
};

export default useNowPlayingMovies;
