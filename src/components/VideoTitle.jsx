import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] sm:pt-[20%] md:pt-[15%] px-4 sm:px-10 absolute text-white w-screen aspect-video bg-gradient-to-r from-black/80 via-black/40 to-transparent animate-fade-in z-20">
      
      {/* Title */}
      <h1 className="text-xl sm:text-xl md:text-5xl font-bold tracking-wide bg-gradient-to-br from-pink-300 via-red-500 to-white bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,192,203,0.3)] animate-pulse max-w-xs sm:max-w-md md:max-w-3xl">
        {title}
      </h1>
      
      {/* Overview */}
      <p className="pt-1 sm:pt-3 text-[0.65rem] sm:text-base md:text-lg max-w-[90vw] sm:max-w-md md:max-w-2xl text-white/85 leading-snug sm:leading-relaxed tracking-normal sm:tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
        {overview}
      </p>

      {/* Buttons (Visible only on desktop) */}
      <div className="pt-4 sm:pt-6 flex flex-row gap-3 sm:gap-4 hidden lg:flex">
        <button className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 hover:from-gray-600 hover:to-gray-300 text-white text-xs sm:text-base font-semibold px-4 sm:px-6 py-2 rounded-xl shadow-md shadow-zinc-500/30 hover:scale-105 transition-all duration-300 tracking-wide backdrop-brightness-125">
          ▶️ Play
        </button>

        <button className="bg-white/5 hover:bg-white/10 text-white text-xs sm:text-base font-medium px-4 sm:px-6 py-2 rounded-xl shadow-inner border border-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300 tracking-wide">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
