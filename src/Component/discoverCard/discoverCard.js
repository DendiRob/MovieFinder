import React from "react";
import './discoverCard.css'

const DiscoverCard = ({searchList}) => {

    const {Title,Poster,Year} = searchList
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

        </li>
    )
}
export default DiscoverCard