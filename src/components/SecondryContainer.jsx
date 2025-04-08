import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className='bg-black'>
      <div className='-mt-45  relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"popular"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"horror"} movies={movies.nowPlayingMovies} />
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