import React, { useState } from "react";
import MovieSlider from "../MovieSlider/MovieSlider";
import { MoviesPage } from "./moviesPage";
import { SeriesPage } from "./seriesPage";

const HomePage = ({addMovieToWatchlist,moviesList}) => {

    const [activeMovies,setMovies] = useState(true)
    const [activeSeries,setSeries] = useState(false)

    const onMovies = () => {
        setSeries(false)
        setMovies(true)
    }

    const onSeries = () => {
        setMovies(false)
        setSeries(true)
    }

    return(
        <>
            <MovieSlider />
            <div className="homeNavPanel">
                <div
                onClick={() => onMovies()}
                style={({
                    color: activeMovies? '#00B9AE': '#F9F9F9',
                    textDecoration: activeMovies? 'underline': 'none',
                    fontFamily: 'Lato',
                    fontSize: '24px',
                    fontWeight: '600'
                })}
                className="setMovies"
                >Movies</div>
                <div 
                onClick={() => onSeries()}
                style={({
                    color: activeSeries? '#00B9AE': '#F9F9F9',
                    textDecoration: activeSeries? 'underline': 'none',
                    fontFamily: 'Lato',
                    fontSize: '24px',
                    fontWeight: '600'
                })}
                className="setSeries"
                >Series</div>
            </div>
            {activeMovies? <MoviesPage moviesList={moviesList} addMovieToWatchlist={addMovieToWatchlist}/>: <SeriesPage moviesList={moviesList} addMovieToWatchlist={addMovieToWatchlist}/>}
        </>
    )
}
export default HomePage