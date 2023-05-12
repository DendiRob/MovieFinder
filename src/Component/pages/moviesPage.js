import React,{useState,useEffect} from 'react';
import CinemaService from '../services/apiCinema';
import './pages.css'
import CardForHomePage from './cardForHomePage';


const MoviesPage = ({addMovieToWatchlist,moviesList}) => {

  const [dataMovies, setDataMovies] = useState([])

  useEffect(() => {
        
      const getDataMovies = new CinemaService()
      function filterByUrl(item) {
          if (item.primaryImage !== null && (item.primaryImage.width < item.primaryImage.height)) {
            return true
          }
        }
      getDataMovies.getMovies()
        .then(item => {
          const data = item.results
          const finalDataMovies = data.filter(filterByUrl)
          setDataMovies(finalDataMovies)
        })
  
  }, []);

    return(
      <>
        <div className='wrapper'>
          <h2>Popular Movies</h2>
          <div className='cardWrapper'>
              {dataMovies.map((obj,index) => {
                return <CardForHomePage key={obj.id} moviesList={moviesList} addMovieToWatchlist={addMovieToWatchlist} obj={obj} index={index}/>
                })}      
          </div>
        </div>
      </>       
    )
}
export { 
  MoviesPage
}