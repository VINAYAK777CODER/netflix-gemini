import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,   // 👁️ Controls visibility of GPT search component
    movieNames: null,       // 🎬 Stores list of movie names from GPT
    movieResults: null,     // 📄 Stores detailed movie data from TMDB
  },
  reducers: {
    // 🔄 Toggle the GPT search view
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    // 🧠 Add both movie titles and their details from GPT + TMDB
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGptResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResult,
  clearGptResults,
} = gptSlice.actions;

export default gptSlice.reducer;

