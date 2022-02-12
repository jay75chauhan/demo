import React from 'react'

import Post from './Post'

function Posts() {
  return (
    <div className="overflow-auto">
      <Post
        key={1}
        name={'jay'}
        message={'hiii'}
        email="@gmail.com"
        timestamp={'1:00'}
        image={'/umwuga.png'}
        postImage={''}
      />
      <Post
        key={1}
        name={'jay'}
        message={'hiii'}
        email="@gmail.com"
        timestamp={'1:00'}
        image={'/umwuga.png'}
        postImage={''}
      />

      <Post
        key={1}
        name={'jay'}
        message={'hiii'}
        email="@gmail.com"
        timestamp={'1:00'}
        image={'/umwuga.png'}
        postImage={'/umwuga.png'}
      />
    </div>
  )
}

export default Posts
