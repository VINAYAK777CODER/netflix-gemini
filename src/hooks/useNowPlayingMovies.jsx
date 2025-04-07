import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/movieSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = () => {
    const dispatch=useDispatch();
    const getNowPlayingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
  
        const data = response.data;
        dispatch(addPlayingMovies(data?.results))
        // console.log(data?.results);
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
      }
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []); 
}
export default useNowPlayingMovies;
