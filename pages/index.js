import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { Button } from '@mui/material'

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://www.google.com/favicon.ico" />
      </Head>
     <header>
      <Header/>
     </header>
    <main className='w-full'>
      <Main/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}
