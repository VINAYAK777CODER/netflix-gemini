import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";
import { LOGIN_BACKGROUND } from "../utils/constants";
import Header from "./Header";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div className="fixed -z-10 w-full h-full">
        <img
          src={LOGIN_BACKGROUND}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Spacer to push search bar below header */}
      <div className="h-20 sm:h-24"></div>

      {/* Search Bar */}
      <GptSearchbar />

      {/* Movie Suggestions */}
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
