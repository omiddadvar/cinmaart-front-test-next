import React from 'react'
import styles from '../styles/TVSeries.module.css'
import Search from './search'

const TVSeries = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Latest TV Series
        </div>
        <Search/>
    </div>
  )
}

export default TVSeries