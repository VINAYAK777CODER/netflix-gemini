import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        API_OPTIONS
      );

      const data = response.data;
      dispatch(addTopRatedMovies(data?.results));
    } catch (error) {
      console.error("Failed to fetch Top Rated movies:", error);
    }
  };

  useEffect(() => {
    if (!topRatedMovies) {
      getTopRatedMovies();
    }
  }, [topRatedMovies]);

  return topRatedMovies;
};

export default useTopRatedMovies;
