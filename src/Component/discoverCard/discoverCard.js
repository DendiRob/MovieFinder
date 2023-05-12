import React from "react";
import './discoverCard.css'
import plus from '../MovieSlider/icons/plus.svg'
import tick from '../MovieSlider/icons/tick.svg'

const DiscoverCard = ({searchList,addMovieToWatchlistFromSearch,moviesList}) => {

    const {Title,Poster,Year} = searchList

    let needIcon = plus;

    if(moviesList.find(item => item.id === searchList.imdbID)){
        needIcon = tick;
    }

    const transformTitle = async (value) => {
        const url = `http://www.omdbapi.com/?i=${value}&plot=full&apikey=d2a9e0c9`
        const res = await fetch(url)
        const resJson = await res.json()
        const newMovie = {
            id: resJson.imdbID,
            language: resJson.Language,
            describe: resJson.Plot,
            url: resJson.Poster,
            rating: resJson.Ratings[0].Value,
            title: resJson.Title,
            year: resJson.Year
          }
        addMovieToWatchlistFromSearch(newMovie)
    } 

    return(
        <li className="searchCardWrapper">
            <div className="searchInfoBlock">
                <div className="searchCardTitle">{Title}</div>
            </div>
            <img 
            src={Poster}
            alt="film"
            />
            <div className="searchYear">Year: {Year}</div>
            <div 
            className='btnWrap btnWrap_small'
            onClick={()=> {transformTitle(searchList.imdbID)}}
            >
                <img alt="btn-plus" src={needIcon} />
            </div>

        </li>
    )
} 
export default DiscoverCard