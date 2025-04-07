import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null); // Stores the YouTube trailer key

  // Fetch trailer from TMDB API
  const getMovieTrailer = async () => {
    try {
      console.log("Fetching trailer for movie ID:", movieId);

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
      const trailer = filteredVideos?.length ? filteredVideos[0] : data.results[0];

      if (trailer) {
        setTrailerKey(trailer.key); // Set trailer key in state
        console.log("Trailer found:", trailer);
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

  return (
    <div className="video-background">
      {trailerKey ? (
        // Embed YouTube trailer using iframe
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
          title="YouTube trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>Loading trailer...</p> // Placeholder while trailer loads
      )}
    </div>
  );
};

export default VideoBackground;
