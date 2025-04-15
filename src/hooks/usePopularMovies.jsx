import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        API_OPTIONS
      );

      const data = response.data;
      dispatch(addPopularMovies(data?.results));
    } catch (error) {
      console.error("Failed to fetch Popular movies:", error);
    }
  };

  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
  }, [popularMovies]);

  return popularMovies;
};

export default usePopularMovies;
