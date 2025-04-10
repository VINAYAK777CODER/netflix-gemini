import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailervideo:null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null
    
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies=action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailervideo=action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload;
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload;
    }
  },
});
export const {addPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies} =movieSlice.actions;
export default movieSlice.reducer;

// now i will add my moviesSlice to my appStore