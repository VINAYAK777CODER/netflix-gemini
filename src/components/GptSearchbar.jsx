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
  const [errorMsg, setErrorMsg] = useState("");

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      return response.data;
    } catch (error) {
      console.error("TMDB fetch failed:", movie, error);
      return null;
    }
  };

  const handleGptSearchClick = async () => {
    const prompt = searchText.current?.value?.trim();
    if (!prompt) return;

    setLoading(true);
    setErrorMsg("");

    const gptPrompt = `
Act as a Movie Recommendation system.
Suggest 5 top-rated movies with IMDb > 6 based on this query: "${prompt}"
Return ONLY movie names, comma separated.
Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya
    `;

    try {
      const resultText = await generateText(gptPrompt);

      if (!resultText || typeof resultText !== "string") {
        throw new Error("Invalid Gemini response");
      }

      const movies = resultText
        .split(",")
        .map((movie) => movie.trim())
        .filter(Boolean);

      if (movies.length === 0) {
        throw new Error("No movies returned by AI");
      }

      const detailsArray = [];
      for (const movie of movies) {
        const data = await searchMovieTMDB(movie);
        if (data) detailsArray.push(data);
      }

      dispatch(
        addGptMovieResult({
          movieNames: movies,
          movieResults: detailsArray,
        })
      );
    } catch (error) {
      console.error("GPT search failed:", error);

      if (error?.message?.includes("quota")) {
        setErrorMsg("AI quota exceeded. Please try again later.");
      } else {
        setErrorMsg("AI service is temporarily unavailable.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center mt-10 p-1 bg-lime-950 rounded-xl shadow-lg gap-1 w-full max-w-md sm:max-w-xl"
      >
        <input
          ref={searchText}
          type="text"
          className="py-2 px-3 bg-white text-black rounded-l-md focus:outline-none flex-grow text-sm sm:text-base"
          placeholder={lang[configLanguage]?.gptSearchPlaceholder}
        />

        <button
          onClick={handleGptSearchClick}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Searching..." : lang[configLanguage]?.search}
        </button>
      </form>

      {errorMsg && (
        <p className="text-red-500 mt-3 text-sm text-center">{errorMsg}</p>
      )}
    </div>
  );
};

export default GptSearchbar;
