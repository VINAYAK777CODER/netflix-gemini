import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const trailervideo = useSelector((store) => store.movies.trailervideo);
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    // console.log("🔥 movieId:", movieId);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      // console.log("API RESPONSE:", response.data);

      const data = response?.data;

      // ✅ SAFETY CHECK
      if (!data || !data.results) {
        console.error("❌ No results from API");
        dispatch(addTrailerVideo(null)); // IMPORTANT
        return;
      }

      const filteredVideos = data.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      const trailer = filteredVideos.length
        ? filteredVideos[0]
        : data.results.length > 0
        ? data.results[0]
        : null;

      // ✅ HANDLE NO TRAILER CASE (THIS WAS MISSING)
      if (!trailer) {
        console.warn("❌ No trailer available for this movie");
        dispatch(addTrailerVideo(null)); // VERY IMPORTANT
        return;
      }

      // ✅ SUCCESS CASE
      dispatch(addTrailerVideo(trailer));

    } catch (error) {
      console.error("❌ Trailer fetch failed:", error);
      dispatch(addTrailerVideo(null)); // fallback
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieTrailer();
    }
  }, [movieId]);

  console.log("🎬 trailer from store:", trailervideo);

  return trailervideo;
};

export default useMovieTrailer;