import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // const [trailerKey, setTrailerKey] = useState(null); // Stores the YouTube trailer key
  const trailervideo = useSelector((store) => store.movies?.trailervideo);
  useMovieTrailer(movieId);

  return (
    <div className="video-background w-screen">
      {!trailervideo ? (
        <p>Loading trailer...</p>
      ) : trailervideo?.key ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailervideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailervideo.key}`}
          title="YouTube trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>No trailer found</p>
      )}
    </div>
  );
};

export default VideoBackground;
