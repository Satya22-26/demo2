import React from 'react'
import { BiNetworkChart } from 'react-icons/bi'

const Banner: React.FC = () => {
  return (
    <div className="w-full py-3 px-4 sm:px-10">
      <div className="mt-16 sm:mt-9 text-zinc-200">
        <h1
          className="font-extrabold text-[48px] sm:text-[59px] inline-block
          from-blue-700 to-pink-700 bg-gradient-to-r bg-clip-text text-transparent"
        >
          Ask Question
        </h1>

        <div className="flex justify-between items-center font-bold text-sm h-[10vh]">
          <div className="flex space-x-2 items-center h-[24px] text-[#BBBBBB]">
            <BiNetworkChart className="text-[#212D4A] w-[24px] h-[24px]" />
            <p>1 questions</p>
          </div>

          <button
            className="h-[48px] w-[145px] border rounded-full tracking-tighter
           border-blue-600 hover:text-blue-600 transition-colors duration-300"
          >
            Ask a Question
          </button>
        </div>

        <hr className="bottom border-[#212D4A] w-full" />
      </div>
    </div>
  )
}

export default Banner
