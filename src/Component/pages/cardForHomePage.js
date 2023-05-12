import React from "react";
import './pages.css';
import plus from '../MovieSlider/icons/plus.svg'
import tick from '../MovieSlider/icons/tick.svg'

const CardForHomePage = ({obj,index,addMovieToWatchlist,moviesList}) => {

    let needIcon = plus;
    if(moviesList.find(item => item.id === obj.id)){
        needIcon = tick;
    }

    return(
        <div className='card'>
        <img
        alt={index}
        src={obj.primaryImage.url}>
        </img>
        <div className='titleCard'>{obj.titleText.text}</div>
        <div className='btn-onCard'
        onClick={() => {
            addMovieToWatchlist(obj)
        }}
        >
            <div className='btnWrap'>
              <img alt="btn-plus" src={needIcon} />
              <div
              className='btn-watch'
              >
              Watchlist
              </div>
            </div>
        </div>
      </div>
      )
    
}
export default CardForHomePage