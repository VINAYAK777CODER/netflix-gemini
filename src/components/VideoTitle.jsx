import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-10 absolute text-white w-screen aspect-video bg-gradient-to-r from-black/80 via-black/40 to-transparent animate-fade-in z-20">
      <h1 className="text-3xl md:text-5xl font-bold tracking-wide bg-gradient-to-br from-pink-300 via-red-500 to-white bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,192,203,0.3)] animate-pulse">
        {title}
      </h1>
      
      <p className="pt-3 text-sm md:text-base max-w-xl text-white/85 leading-relaxed tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
        {overview}
      </p>

      <div className="pt-6 flex gap-4">
        <button className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 hover:from-gray-600 hover:to-gray-300 text-white text-sm md:text-base font-semibold px-6 py-2 rounded-xl shadow-md shadow-zinc-500/30 hover:scale-105 transition-all duration-300 tracking-wide backdrop-brightness-125">
          ▶️ Play
        </button>

        <button className="bg-white/5 hover:bg-white/10 text-white text-sm md:text-base font-medium px-6 py-2 rounded-xl shadow-inner border border-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300 tracking-wide">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
