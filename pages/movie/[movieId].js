import React , {useEffect , useState} from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/MoviesDetails.module.css'
import detailsData from '../api/data/detailsData.json'
import {BaseTable , Pagination} from '../../components/SubComponents'

const moviesDetails = () => {
    const router = useRouter()
    const movieId = router.query.movieId
    const selectedItem =  detailsData.find((obj) => {
      return obj.movieId == movieId;
    })
    const tableHeader = [
      {
        title : "File Name",
        key : "fileName"
      },
      {
        title : "Author",
        key : "author"
      },
      {
        title : "Link",
        key : "link"
      }
    ];
    return (
      <div className={styles.container}>
        {selectedItem ?
          <div className={styles.moviesDetail}>
            <div className={styles.moviesDetail_Banner}>
            <img 
                src={selectedItem.url}
            />
            </div>
            <div className={styles.moviesDetail_Description}>
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.content}</p>
              <BaseTable 
                Header={tableHeader}
                Data={selectedItem.subtitles}
              />
              <Pagination/>
            </div>  
          </div>
        : <h2> 204 | Item Not Found </h2> 
      }
      </div>
    )
}

export default moviesDetails