import React from 'react'

import Posts from './Posts'
import InputBox from './InputBox'

function Feed() {
  return (
    <div className="mr-4 h-screen flex-grow overflow-y-auto pb-44 pt-6 scrollbar-hide xl:mr-40">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* stories: */}

        {/* InputBox */}

        <InputBox />
        {/* Post */}
        <Posts />
      </div>
    </div>
  )
}

export default Feed
