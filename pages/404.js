import React from 'react'
import Head from 'next/head'
import Styles from  '../styles/404.module.css'
const Custom404 = () => {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Cinamaart | 404 Not Found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className={Styles.message}>
            <span>404 | Page Not Found</span>
        </div>
    </div>
  )
}

export default Custom404