import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6  w-screen  ">
      <h1 className="text-base md:text-xl ml-20 py-2 font-semibold text-white px-4 py-1 tracking-wide">
        {title}
      </h1>

      <div className="flex overflow-x-scroll mx-20 scrollbar-hide">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
