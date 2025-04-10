import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies = () => {
    const dispatch=useDispatch();
    const getPopularMovies = async () => {
      try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          API_OPTIONS
        );
  
        const data = response.data;
        dispatch(addPopularMovies(data?.results))
        console.log(data?.results);
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
      }
    };
  
    useEffect(() => {
        getPopularMovies();
    }, []); 
}
export default usePopularMovies;
