import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});
export const {addPlayingMovies} =movieSlice.actions;
export default movieSlice.reducer;

// now i will add my moviesSlice to my appStore