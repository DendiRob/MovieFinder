import React,{useState,useEffect} from 'react';
import CinemaService from '../services/apiCinema';
import CardForHomePage from './cardForHomePage';
import './pages.css'



const SeriesPage = ({addMovieToWatchlist,moviesList}) => {

  const [dataSeries, setDataSeries] = useState([])


  useEffect(() => {
      const getDataSeries = new CinemaService()
      function filterByUrl(item) {
          if (item.primaryImage !== null && (item.primaryImage.width < item.primaryImage.height)) {
            return true
          }
        }
      getDataSeries.getSeries()
        .then(item => {
          const data = item.results
          const finalDataSeries = data.filter(filterByUrl)
          setDataSeries(finalDataSeries)
        })
  
  }, []);


    return(
      <>
        <div className='wrapper'>
          <h2>Popular Series</h2>
          <div className='cardWrapper'>
              {dataSeries.map((obj,index) => {
                return <CardForHomePage key={obj.id} moviesList={moviesList} addMovieToWatchlist={addMovieToWatchlist} obj={obj} index={index}/>
                })}
          </div>
        </div>
        </>
    )
}

export {
    SeriesPage
}