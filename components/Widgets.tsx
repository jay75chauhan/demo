import React from 'react'

import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Contact from './Contact'
const contacts = [
  { src: 'https://links.papareact.com/kxk', name: 'Elone Musk' },
  { src: 'https://links.papareact.com/zvy', name: 'Bill Gates' },

  { src: 'https://links.papareact.com/r57', name: 'James Bond' },
]
function Widgets() {
  return (
    <div className="static mt-5 hidden  flex-col overscroll-none  p-2 py-6 px-6  lg:flex">
      <h1 className="pl-3 pb-2 text-red-500">Add to Context</h1>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  )
}

export default Widgets
