import React from "react";
import './watchlistCard.css'

const WatchlistCard = ({moviesList}) => {
    const {id,url,day,month,year,title,language,describe,rating} = moviesList

    return(
        <div className="watchlistCardWrapper" key={id}>
            <img 
            src={url}
            alt="film"
            />
            <div className="CardInfoBlock">
                <div className="watchlistCardTitle">{title}</div>
                <p>{describe}</p>
                <div className="infoLanguage">Language: {language}</div>
                <div className="infoRating">Rating: {rating}</div>
                <div className="releaseDate">Release date: {day}.{month}.{year}</div>
            </div>
        </div>
    )
}
export default WatchlistCard