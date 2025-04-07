import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailervideo:null,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies=action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailervideo=action.payload;
    }
  },
});
export const {addPlayingMovies,addTrailerVideo} =movieSlice.actions;
export default movieSlice.reducer;

// now i will add my moviesSlice to my appStore