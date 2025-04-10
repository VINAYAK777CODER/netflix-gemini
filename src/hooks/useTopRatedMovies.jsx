import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../utils/movieSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";


const useTopRatedMovies = () => {
    const dispatch=useDispatch();
    const getTopRatedMovies = async () => {
      try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          API_OPTIONS
        );
  
        const data = response.data;
        dispatch(addTopRatedMovies(data?.results))
        console.log(data?.results);
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
      }
    };
  
    useEffect(() => {
        getTopRatedMovies();
    }, []); 
}
export default useTopRatedMovies;
