import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { generateText } from "../utils/gemini";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchbar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const configLanguage = useSelector((store) => store.config.lang);
  const [loading, setLoading] = useState(false);

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch movie:", movie, error);
      return null;
    }
  };

  const handleGptSearchClick = async () => {
    const prompt = searchText.current.value.trim();
    if (!prompt) return;

    setLoading(true);

    const gptPrompt =  "Act as a Movie Recommendation system and suggest some top rated with imdb > 6 movies for the query : " +
    prompt +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";;

    try {
      const results = await generateText(gptPrompt);
      const movies = results.split(",").map((movie) => movie.trim());

      const detailsArray = [];
      for (const movie of movies) {
        const data = await searchMovieTMDB(movie);
        if (data) detailsArray.push(data);
      }

      dispatch(addGptMovieResult({ movieNames: movies, movieResults: detailsArray }));
    } catch (error) {
      console.error("Error during GPT search:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center mt-[10%] p-1 bg-lime-950 rounded-xl shadow-lg gap-1"
      >
        <input
          ref={searchText}
          type="text"
          className="py-3 px-3 bg-white text-black rounded-l-md focus:outline-none w-[300px]"
          placeholder={lang[configLanguage]?.gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Searching..." : lang[configLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
