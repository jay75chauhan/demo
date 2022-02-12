import React from 'react'
import Link from 'next/link'
import SidebarRow from './SidebarRow'
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  AnnotationIcon,
  RssIcon,
} from '@heroicons/react/solid'

import {
  UserIcon,
  HomeIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'

function Sidebar() {
  const router = useRouter()
  return (
    <div className="static mt-5 max-w-[600px] overscroll-none p-2 xl:min-w-[300px]">
      <SidebarRow Icon={HomeIcon} title="Home" />

      <SidebarRow Icon={UserIcon} title="Profile" />

      <SidebarRow Icon={RssIcon} title="Jobs" />
      <SidebarRow Icon={DesktopComputerIcon} title="Nextwork" />
      <SidebarRow Icon={AnnotationIcon} title="Messages" />
    </div>
  )
}

export default Sidebar
