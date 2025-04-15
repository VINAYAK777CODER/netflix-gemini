import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const trailervideo = useSelector((store) => store.movies.trailervideo);
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const data = response.data;

      const filteredVideos = data?.results?.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      const trailer = filteredVideos?.length
        ? filteredVideos[0]
        : data.results[0];

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
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

  useEffect(() => {
    if (movieId && !trailervideo) {
      getMovieTrailer();
    }
  }, [movieId]);

  return trailervideo;
};

export default useMovieTrailer;
