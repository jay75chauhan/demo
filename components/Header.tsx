import React, { useState } from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
  BellIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'

function Header() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <header className="sticky   top-0  z-50 grid w-full grid-cols-3 bg-transparent p-5 shadow-md backdrop-blur-sm md:px-10   ">
      {/* left */}
      <Link href="/">
        <div
          onClick={() => {}}
          className="relative my-auto flex h-6 cursor-pointer items-center md:h-10 "
        >
          <img src="/umwuga.png" width={160} />
        </div>
      </Link>
      {/* Middle */}
      <div className="flex items-center  rounded-full border bg-white py-2 shadow-sm md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={'Start your search ?'}
          className="flex-grow bg-transparent pl-5 text-xs text-gray-600 placeholder-gray-400 outline-none md:text-sm"
        />
        <SearchIcon className="hidden  h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white  shadow hover:animate-spin md:mx-2 md:inline-flex" />
      </div>

      {/* Rigt */}
      <div className="relative flex items-center justify-end space-x-4  text-gray-900">
        <div className="relative">
          <div className="absolute top-1 right-1 h-2 w-2 animate-ping rounded-full bg-red-400" />
          <BellIcon className="h-8  text-gray-600" />
        </div>
        <img src="/umwugaa.png" width={35} />
      </div>
    </header>
  )
}

export default Header
