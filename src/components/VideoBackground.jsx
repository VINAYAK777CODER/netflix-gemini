import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailervideo = useSelector((store) => store.movies?.trailervideo);
  useMovieTrailer(movieId);

  return (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      overflow: "hidden",
      backgroundColor: "#000",
    }}
  >
    {trailervideo === undefined ? (
      // ⏳ STILL LOADING
      <p style={{ color: "white", textAlign: "center", paddingTop: "20px" }}>
        Loading trailer...
      </p>
    ) : trailervideo === null ? (
      // ❌ NO TRAILER AVAILABLE
      <p style={{ color: "red", textAlign: "center", paddingTop: "20px" }}>
        No trailer available
      </p>
    ) : trailervideo?.key ? (
      // ✅ SHOW TRAILER
      <iframe
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
          height: "56.25vw",
          minHeight: "100vh",
          minWidth: "177.77vh",
          border: "none",
        }}
        src={`https://www.youtube.com/embed/${trailervideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailervideo.key}`}
        title="YouTube trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ) : (
      // fallback safety
      <p style={{ color: "white", textAlign: "center", paddingTop: "20px" }}>
        Something went wrong
      </p>
    )}
  </div>
);
};

export default VideoBackground;