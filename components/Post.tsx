import React from 'react'
import Image from 'next/image'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

function Post({ name, postImage, image, timestamp, message }: any) {
  return (
    <div className="flex flex-col overflow-auto ">
      <div className="mt-5 rounded-t-2xl bg-white p-5 shadow-md">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt="..."
          />
          <div>
            <p className="font-semibold">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">1/23/</p>
            ) : (
              <p className="text-xs text-gray-400">Loading....</p>
            )}
          </div>
        </div>
        <p className="p-3 text-lg  font-semibold">{message}</p>
      </div>
      {postImage && (
        <div className="relative  h-60 bg-white md:h-96">
          <Image src={postImage} object-fit="cover" layout="fill" />
        </div>
      )}
      <div className="flex items-center justify-between rounded-b-2xl  border-t bg-white  px-6 py-2 text-gray-400 shadow-md">
        <div className="inoutIcon flex-col items-center justify-center  rounded-bl-2xl">
          <ThumbUpIcon className="h-6" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inoutIcon flex-col items-center justify-center   ">
          <ChatAltIcon className="mx-auto h-6" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inoutIcon flex-col items-center justify-center">
          <ShareIcon className="mx-auto h-6" />
          <p className="rounded-br-2xl text-xs sm:text-base">Shar</p>
        </div>
      </div>
    </div>
  )
}

export default Post
