import React from 'react'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

function user() {
  return (
    <div className=" sc min-h-screen bg-gray-100 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className=" flex  ">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}

        <Widgets />

        {/* widgets */}
      </main>
    </div>
  )
}

export default user
