import React from 'react'
import Head from 'next/head'
import styles from '../styles/Form.module.css'

const SignUp = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Cinamaart | SignUp</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={styles.Form_container}>
            <h2>SignUp</h2>
            <form className={styles.Form}
                  onSubmit={(e) => e.preventDefault()} >
                <label for="username">Username *</label>
                <input type="text" name="username" required/>
                <label for="email">Email *</label>
                <input type="text" name="email" required/>
                <label for="phone">Phone Number</label>
                <input type="text" name="phone"/>
                <label for="password">Password *</label>
                <input type="password" name="password" required/>
                <label for="confirm">Confirm Password *</label>
                <input type="password" name="confirm" required/>
                <button type="submit">Sign-in</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp