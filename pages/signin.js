import React from 'react'
import Head from 'next/head'
import styles from '../styles/Form.module.css'

const SignIn = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinamaart | SignIn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className={styles.Form_container}>
            <form className={styles.Form} 
                  onSubmit={(e) => e.preventDefault()}>
                <h2>SignIn</h2>
                <label for="username">Username / Email</label>
                <input type="text" name="username" required/>
                <label for="password">Password</label>
                <input type="password" name="password" required/>
                <button type="submit">Sign-in</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn