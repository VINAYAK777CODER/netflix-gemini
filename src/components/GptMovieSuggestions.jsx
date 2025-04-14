import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  


  if (!movieNames || !movieResults) return null;

  return (
    <div className="p-4 m-4  bg-black/70 text-white w-full min-h-screen top-0">
      {movieNames.map((movieName, index) => {
        const moviesForThisCategory = movieResults[index]?.results;
        if (!moviesForThisCategory || moviesForThisCategory.length === 0) return null;

        return (
          <MovieList
            key={movieName}
            title={movieName}
            movies={moviesForThisCategory}
          />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
