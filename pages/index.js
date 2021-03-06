import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LeftSideBar from '../components/leftsidebar'
import RightSideBar from '../components/rightsidebar'
import Main from '../components/main'
import { Grid } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://twitter.com">Twitter!</a>
        </h1>
        <Grid
          templateAreas={`"header header header"
                  "left main right"
                  "left main right"`}
          gridTemplateRows={'50px 1fr 5px'}
          gridTemplateColumns={'200px 1fr'}
          h='700px'
          gap='3'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <LeftSideBar />
          <Main />
          <RightSideBar />

        </Grid>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/timbaron"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with Love by Timothy Akiode

        </a>
      </footer>
    </div>
  )
}
