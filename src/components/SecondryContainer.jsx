import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black w-screen min-h-screen ">
      {/* Apply positive mt for base, override with negative mt for md and up */}
      <div className=" md:-mt-44 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondryContainer;
