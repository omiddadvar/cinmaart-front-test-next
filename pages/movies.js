import React from 'react'
import styles from '../styles/Movies.module.css'
import Search from './search'

const Movies = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Latest Movies
        </div>
        <Search/>
    </div>
  )
}

export default Movies