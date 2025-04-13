import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchbar = () => {
  const configLanguage=useSelector(store=>store.config.lang);
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center mt-[10%] p-1 bg-lime-950 rounded-xl shadow-lg gap-1">
        <input
          type="text"
          className="py-3 px-3 bg-white text-black rounded-l-md focus:outline-none w-[300px]"
          placeholder={lang[configLanguage]?.gptSearchPlaceholder}
        />
        <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition duration-300">
          {lang[configLanguage]?.search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchbar
