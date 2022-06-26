import styles from '../styles/Search.module.css'
import { Card , Pagination} from '../components/SubComponents' 
import { useEffect, useState } from 'react'
import JsonData from '../pages/api/data/homeData.json'

const Search = () => {
    const [dataLatest , setDataLatest] = useState([])
    useEffect(() => {
      setDataLatest(JsonData)
    });
  return (
    <div className={styles.container}>
        <div className={styles.Grid_container}>
        {
            dataLatest.map((item , index) => (
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