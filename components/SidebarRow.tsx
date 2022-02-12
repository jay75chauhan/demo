import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function SidebarRow({ Icon, title }: { Icon: any; title: string }) {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/user')}>
      <div className="flex cursor-pointer items-center space-x-2 rounded-xl p-4 hover:bg-gray-200">
        <Icon className="h-8 w-8 text-red-400" />
        <p className="hidden font-medium md:inline-flex">{title}</p>
      </div>
    </div>
  )
}

export default SidebarRow
