import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import styles from "../styles/AppTSX.module.css";
import NavBar from '@/components/NavBar';
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title key="title">Search news - VV17CH3R</title>
        <meta key="description" name="description" content={`Пример-приложение "Новости из США" от Родиона Нараянова | VV17CH3R PROD." `}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress color="#29D" height={5} />
      <NavBar />            
      <Container className={styles.mainContainer}>
        <Component {...pageProps} /> 
      </Container>
    </div>
  )
}
