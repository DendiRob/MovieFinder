import React from 'react';
import WatchlistCard from '../watchlistCard/wathclistCard';
import './watchlist.css'

const Watchlist = ({moviesList,removeMovieFromWatchlist}) => {
    const sumMovies = moviesList.length
    let title = 'titles'
    if(sumMovies === 1){
        title = 'title'
    }else{
        title = 'titles'
    }
    return(
        <div className='watchlistWrapper'>
            <h1>Watchlist</h1>
            <div className='amountOfMovies'>{sumMovies} {title}</div>
            <ul className='moviesList'  >
               {moviesList.map(item => {
                    return <WatchlistCard removeMovieFromWatchlist={removeMovieFromWatchlist} moviesList={item}/>
                })}
            </ul>
        </div>
    )
}
export default Watchlist