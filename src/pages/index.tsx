import Head from 'next/head'
import { Inter } from '@next/font/google'
// import styles from '<redux>/styles/Home.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Frederick Go</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <h1>
        Welcome to my new Portfolio website with TypeScript!
      </h1>
      <Footer></Footer>
    </>
  )
}
