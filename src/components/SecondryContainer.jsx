import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black w-screen min-h-screen">
  <div className="-mt-36 relative z-20">
    {/* add a fade overlay at top */}
    <div className="h-16 bg-gradient-to-b from-transparent to-black w-full" />
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    <MovieList title={"Popular"}     movies={movies.popularMovies} />
    <MovieList title={"Top Rated"}   movies={movies.topRatedMovies} />
    <MovieList title={"Upcoming"}    movies={movies.upcomingMovies} />
  </div>
</div>
  );
};

export default SecondryContainer;