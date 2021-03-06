import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

export default function Home() {
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
        <Feed />
        <Widgets />

        {/* widgets */}
      </main>
    </div>
  )
}
