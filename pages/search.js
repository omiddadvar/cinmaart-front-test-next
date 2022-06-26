import styles from '../styles/Search.module.css'
import { Card , Pagination} from '../components/SubComponents' 
import { useEffect, useState } from 'react'
import JsonData from '../pages/api/data/SearchData.json'

const Search = () => {
  return (
    <div className={styles.container}>
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