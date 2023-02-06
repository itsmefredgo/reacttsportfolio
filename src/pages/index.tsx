import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '<redux>/styles/Home.module.css'

import Home from './home/index'

const inter = Inter({ subsets: ['latin'] })

export default function HomeDef() {
    return (<Home></Home>)
}