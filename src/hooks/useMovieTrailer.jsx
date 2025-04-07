import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";

const useMovieTrailer=(movieId)=>{
      const dispatch = useDispatch();
    
      // Fetch trailer from TMDB API
      const getMovieTrailer = async () => { 
        try {
        //   console.log("Fetching trailer for movie ID:", movieId);
    
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
          );
    
          const data = response.data;
    
          // Filter only YouTube trailers
          const filteredVideos = data?.results?.filter(
            (video) => video.type === "Trailer" && video.site === "YouTube"
          );
    
          // Pick the first matching trailer
          const trailer = filteredVideos?.length
            ? filteredVideos[0]
            : data.results[0];
    
          if (trailer) {
            // Set trailer key in state
            dispatch(addTrailerVideo(trailer));
            // console.log("Trailer found:", trailer);
          } else {
            console.warn("No trailer found for this movie.");
          }
        } catch (error) {
          console.error("Problem in fetching the movie trailer");
    
          if (error.response) {
            console.error("Error status:", error.response.status);
            console.error("Error message:", error.response.data.status_message);
          } else {
            console.error("Error:", error.message);
          }
        }
      };
    
      // Fetch trailer when movieId changes
      useEffect(() => {
        if (movieId) {
          getMovieTrailer();
        } else {
          console.warn("No movie ID provided.");
        }
      }, [movieId]);

}
export default useMovieTrailer;