import React from "react";

import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {

useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondryContainer/>
      {/* 
      - movie container
        -video trailer
        -video title
      - secondry container
        -movie list*n
        -cards*n
       */}
    </div>
  );
};

export default Browse;

// 
/*
✅ Why axios is better in many cases:
Feature	axios ✅	fetch ❌
Automatically parses JSON	response.data (no .json())	You need to do await res.json()
Handles request timeout easily	Yes (configurable)	Not supported natively
Interceptors (for auth tokens)	Yes	No
Better error handling	Provides structured error object	Errors only on network failure
Smaller code, cleaner syntax	Yes	Slightly more verbose
Older browser support	Yes	Not great without polyfills

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
  };
  useEffect(()=>{
    getNowPlayingMovies();
  },[])

 */
