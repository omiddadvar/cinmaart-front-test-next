import React from 'react'
import Head from 'next/head'
import styles from '../styles/Movies.module.css'
import Search from './search'

const Movies = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinamaart | Movies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className={styles.header}>
            Latest Movies
        </div>
        <Search isOnlySearch={false}/>
    </div>
  )
}

export default Movies