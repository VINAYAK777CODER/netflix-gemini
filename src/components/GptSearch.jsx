import React from 'react';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchbar from './GptSearchbar';
import { LOGIN_BACKGROUND } from '../utils/constants';

const GptSearch = () => {
  return (
    <div flex>
      <div className="fixed -z-10 w-full h-full">
        <img
          src={LOGIN_BACKGROUND}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>

      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
