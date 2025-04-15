import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10 w-full  ">
      <h1 className="text-lg sm:text-xl md:text-2xl  font-semibold text-white py-3 tracking-wide">
        {title}
      </h1>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 pb-6">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
