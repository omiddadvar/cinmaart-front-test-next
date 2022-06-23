import React from 'react'
import styles from '../../styles/components/subComponents/Card.module.css'
import {RiStarFill, RiThumbUpFill , RiThumbDownLine} from 'react-icons/ri'
import Image from 'next/image'
const Card = (props) => {
  return (
    <div className={styles.Card_container} onClick={props.onClick}>
        <div className={styles.Card_Header}>
            <p>{props.title}</p>
        </div>
        <div className={styles.Card_image}>
          <img 
              src={props.url} 
              width={195} 
              height={200}
          />
        </div>
        <div className={styles.Card_Content}>
            {props.content}
        </div>
        <div className={styles.Card_Actions}>
            <RiThumbUpFill size={15} color="white"/>
            <RiThumbDownLine size={15} color="white"/>
            <RiStarFill size={15} color="gold"/>
            <RiStarFill size={15} color="gold"/>
            <RiStarFill size={15} color="gold"/>
            <RiStarFill size={15} color="gold"/>
            <RiStarFill size={15} color="gold"/>
        </div>
    </div>
  )
}

export default Card