import React from 'react'
import Head from 'next/head'
import styles from '../styles/Contactus.module.css'

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinamaart | ContactUs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Contact Us</h1>
    </div>
  )
}

export default ContactUs