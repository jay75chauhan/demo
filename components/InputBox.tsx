import React, { useRef, useState } from 'react'
import Image from 'next/image'

import { EmojiHappyIcon } from '@heroicons/react/outline'
import { UserIcon, HomeIcon, DesktopComputerIcon } from '@heroicons/react/solid'

function InputBox() {
  const inputRef = useRef(null)
  const filepickeRef = useRef(null)

  const [imageToPost, setImageToPost] = useState(null)

  return (
    <div className="mt-6 rounded-2xl  bg-white font-medium text-gray-500 shadow-md">
      <div className="flex items-center space-x-1 p-4 sm:space-x-4">
        <img
          src="/umwugaa.png"
          className="rounded-full"
          width={40}
          height={40}
        />
        <form className="flex flex-1  ">
          <input
            ref={inputRef}
            className="h-9 flex-grow rounded-full bg-gray-50 px-2 py-1 text-sm shadow-md focus:outline-none sm:h-12 sm:px-5 sm:text-lg"
            type="text"
            placeholder={`what would you like to share ?`}
          />
          <button hidden type="submit"></button>
        </form>
      </div>

      <div className="flex justify-evenly border-t p-3">
        <div className="inoutIcon ">
          <HomeIcon className="text-gray--500 h-7 " />
          <p className="hidden text-center text-xs sm:inline-flex sm:text-sm xl:text-base">
            Post
          </p>
        </div>
        <div className="inoutIcon">
          <UserIcon className="text-gray--500  h-7" />
          <p className="hidden text-center text-xs sm:inline-flex sm:text-sm xl:text-base">
            Project
          </p>
          <input type="file" hidden ref={filepickeRef} />
        </div>
        <div className="inoutIcon">
          <DesktopComputerIcon className="text-gray--500  h-7 " />
          <p className="hidden text-center text-xs sm:inline-flex sm:text-sm xl:text-base">
            Job
          </p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
