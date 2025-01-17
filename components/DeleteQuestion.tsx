import React from 'react'
import { BsTrash3Fill } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

const DeleteQuestion: React.FC = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
    bg-black bg-opacity-50 transform z-50 transition-transform duration-300 scale-0`}
    >
      <div className="bg-[#16112F] text-[#BBBBBB] shadow-lg shadow-slate-900 rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold" />
            <button type="button" className="border-0 bg-transparent focus:outline-none">
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center rounded-xl my-5 space-y-2">
            <BsTrash3Fill className="text-red-600" size={50} />
            <h4 className="text-[22.65px]">Delete Question</h4>
            <p className="text-[14px]">Are you sure you want to delete this question?</p>
          </div>

          <div className="flex justify-center items-center space-x-2">
            <button
              className="text-sm border border-blue-600 rounded-full w-[150px] h-[48px] text-white
            right-2 sm:right-10 hover:bg-blue-700 transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              className="text-sm border border-red-600 bg-red-600 rounded-full w-[150px] h-[48px] text-white
            right-2 sm:right-10 hover:bg-transparent transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteQuestion
