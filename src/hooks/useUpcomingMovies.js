import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector(state=>state.movies.upcomingMovies);
  const dispatch = useDispatch();
  

  const getUpcomingMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        API_OPTIONS
      );

      const data = response.data;
      dispatch(addUpcomingMovies(data?.results));
    } catch (error) {
      console.error("Failed to fetch upcoming movies:", error);
    }
  };

  useEffect(() => {
    if (!upcomingMovies) {
      getUpcomingMovies();
    }
  }, [upcomingMovies]); // added dependency for better clarity

  return upcomingMovies; // important: return the data
};

export default useUpcomingMovies;
