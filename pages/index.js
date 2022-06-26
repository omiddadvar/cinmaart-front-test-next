import styles from '../styles/Home.module.css'
import { Card } from '../components/SubComponents' 
import { useEffect, useState } from 'react'
import JsonData from '../pages/api/data/homeData.json'
export default function Home() {
  const [dataLatest , setDataLatest] = useState([])
  useEffect(() => {
    setDataLatest(JsonData)
  });
  return (
    <div className={styles.container}>
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
  )
}
