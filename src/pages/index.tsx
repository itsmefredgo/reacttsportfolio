import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '<redux>/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (<>
        <main className={styles.main}>
            <div>Hello</div>
        </main>
    </>)
}