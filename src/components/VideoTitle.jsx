import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div>
        <h1 className='pt-36 pl-7 font-bold text-3xl'>{title}</h1>
        <p className='pt-1 pl-7 w-1/3'>{overview}</p>
        <div className='pt-3 pl-8 flex gap-1'>
        <button className='bg-amber-950 py-2.5 px-7 text-white text-xl rounded-lg'>PLAY</button>
        <button className='bg-amber-950/25 py-2.5 px-6 text-white text-xl rounded-lg'>More-Info</button>
        
        </div>
    </div>
  )
}

export default VideoTitle
/**Just an update for anyone who comes in here: As of Tailwind CSS version 3, they've updated the way opacity classes work in the new version. The older syntax bg-opacity-75 is now replaced with a new syntax, and the value is applied directly to the color class itself.

The new syntax appends the opacity value to the color, separated by a slash /. For example, bg-gray-800 with bg-opacity-75 would look like this in the version 3 and up of Tailwind CSS:

className={"bg-gray-50/75 h-full max-w-md rounded-2xl shadow-md mx-auto md:max-w-lg hover:shadow-lg transition-shadow"}> */