import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className='bg-black w-screen min-h-screen '>
      <div className='-mt-45  relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>


      {/*
        movielist-popular
         moviecard*n
        movielist-NowPlaying
        movielist-Trending
        movieList-horror


      */}
    </div>
  )
}

export default SecondryContainer