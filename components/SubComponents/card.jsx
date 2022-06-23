import React from 'react'
import styles from '../../styles/components/subComponents/Card.module.css'

const Card = (props) => {
  return (
    <div className={styles.Card_container}>
        <div className={styles.Card_Header}>
            <h2>{props.title}</h2>
        </div>
        <div className={styles.Card_image}>
          
        </div>
        <div className={styles.Card_Content}>
            <p>{props.content}</p>
        </div>
        <div className={styles.Card_Actions}>
            
        </div>
    </div>
  )
}

export default Card