import styles from '../styles/Search.module.css'
import { Card , Pagination} from '../components/SubComponents' 
import { useEffect, useState } from 'react'
import JsonData from '../pages/api/data/SearchData.json'
import Head from 'next/head'
export const getStaticProps = async () => {
  return {
    props : { 
      data : JsonData
    }
  }
}

const Search = ({data , isOnlySearch = true}) => {
  return (
    <div className={styles.container}>
      { isOnlySearch &&
      <Head>
        <title>Cinamaart | Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      }
        <div className={styles.Grid_container}>
        {
            JsonData.map((item , index) => (
            <Card key={index}
                    title={item.title}
                    content={item.content}
                    url={item.url}
                    onClick={() => alert(item.title)}
                    />
            )) 
        }
        </div>
        <Pagination/>
    </div>
  )
}

export default Search