import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Card } from '../components/SubComponents' 
import JsonData from '../pages/api/data/homeData.json'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Cinamaart | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.Grid_header}>
        Latest movies in the world
      </div>
      <div className={styles.Grid_container}>
      {
            JsonData.latest.map((item , index) => (
              <Card key={index}
                    title={item.title}
                    content={item.content}
                    url={item.url}
                    onClick={() => alert(item.title)}
              />
            )) 
        }
      </div>
      <div className={styles.Grid_header}>
        The most popular movies in the world
      </div>
      <div className={styles.Grid_container}>
      {
            JsonData.popular.map((item , index) => (
              <Card key={index}
                    title={item.title}
                    content={item.content}
                    url={item.url}
                    onClick={() => alert(item.title)}
              />
            )) 
        }
      </div>
    </div>
  )
}
