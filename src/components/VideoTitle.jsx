import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[22%] px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black/60 via-zinc-800/40 to-transparent animate-fade-in">
      <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-[0_3px_12px_rgba(255,255,255,0.3)] leading-tight">
        {title}
      </h1>
      <p className="pt-5 text-lg max-w-2xl text-white/85 leading-relaxed tracking-wide drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
        {overview}
      </p>
      <div className="pt-8 flex gap-6">
        <button className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white text-xl font-semibold px-8 py-3 rounded-2xl shadow-xl shadow-zinc-500/30 hover:scale-105 transition-all duration-300 tracking-wide backdrop-brightness-125">
          ▶️ Play
        </button>

        <button className="bg-white/5 hover:bg-white/10 text-white text-xl font-medium px-7 py-3 rounded-2xl shadow-inner border border-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300 tracking-wide">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};





export default VideoTitle
/**Just an update for anyone who comes in here: As of Tailwind CSS version 3, they've updated the way opacity classes work in the new version. The older syntax bg-opacity-75 is now replaced with a new syntax, and the value is applied directly to the color class itself.

The new syntax appends the opacity value to the color, separated by a slash /. For example, bg-gray-800 with bg-opacity-75 would look like this in the version 3 and up of Tailwind CSS:

className={"bg-gray-50/75 h-full max-w-md rounded-2xl shadow-md mx-auto md:max-w-lg hover:shadow-lg transition-shadow"}> */