import React from "react";
import './watchlistCard.css'

const WatchlistCard = ({moviesList,removeMovieFromWatchlist}) => {
    const {id,url,year,title,language,describe,rating} = moviesList

    return(
        <div className="watchlistCardWrapper">
            <img 
            src={url}
            alt="film"
            />
            <div
            className="CardInfoBlock">
                <div className="watchlistCardTitle">{title}</div>
                <p>{describe}</p>
                <div className="infoLanguage">Language: {language}</div>
                <div className="infoRating">Rating: {rating}</div>
                <div className="releaseDate">Year: {year}</div>
                <button 
                onClick={() => removeMovieFromWatchlist(id)}
                className="removeMovie">Remove</button>
            </div>
        </div>
    )
}
export default WatchlistCard