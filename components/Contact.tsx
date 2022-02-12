import React from 'react'
import Image from 'next/image'

function Contact({ src, name }: any) {
  return (
    <div className="re relative mb-2 flex cursor-pointer items-center space-x-3 rounded-xl  px-4 py-2 hover:bg-red-50">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        layout="fixed"
      />
      <p>{name}</p>

      <button className="rounded-lg bg-red-400 px-2 py-1 text-white">
        Add
      </button>
      <div className="absolute bottom-2 left-7 h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
    </div>
  )
}

export default Contact
