import React from 'react'
import Head from 'next/head'
import styles from '../styles/TVSeries.module.css'
import Search from './search'

const TVSeries = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinamaart | TVSeries</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className={styles.header}>
            Latest TV Series
        </div>
        <Search isOnlySearch={false}/>
    </div>
  )
}

export default TVSeries