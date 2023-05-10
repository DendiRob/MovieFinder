import React from 'react';
import WatchlistCard from '../watchlistCard/wathclistCard';
import './watchlist.css'

const Watchlist = ({moviesList,removeMovieFromWatchlist}) => {
    const sumMovies = moviesList.length
    
    return(
        <div className='watchlistWrapper'>
            <h1>Watchlist</h1>
            <div className='amountOfMovies'>{sumMovies} titles</div>
            <ul className='moviesList'  >
               {moviesList.map(item => {
                    return <WatchlistCard removeMovieFromWatchlist={removeMovieFromWatchlist} moviesList={item}/>
                })}
            </ul>
        </div>
    )
}
export default Watchlist