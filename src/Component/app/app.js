import './app.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, MoviesPage,SeriesPage } from '../pages';
import LeftBar from '../leftBar/leftBar';
import Layout from '../layout/layout';
import Watchlist from '../watchlist/watchlist';
import Discover from '../discover';

function App() {
  const [activeMenu,setMenuActive] = useState(false);
  const [moviesList,setList] = useState([]);

  const menuHandler = (data) => {
    setMenuActive(data)
    }

  const forCloseMenu = (data) => {
    setMenuActive(data)
  }

  const removeMovieFromWatchlist = (value) => {
    const indexForRemove = moviesList.findIndex(item => item.id === value)
    setList([
      ...moviesList.slice(0, indexForRemove),
      ...moviesList.slice(indexForRemove + 1)
    ])

  }
  const addMovieToWatchlist = (value) =>{
    if(moviesList.find(item => item.id === value.id)){
    }else{
      const newMovie = {
        id: value.id,
        language: value.plot.language.id,
        describe: value.plot.plotText.plainText,
        url: value.primaryImage.url,
        rating: value.ratingsSummary.aggregateRating,
        title: value.titleText.text,
        year: value.releaseDate.year
      }
      setList([...moviesList, newMovie])
    }
  }

  const addMovieToWatchlistFromSearch = (value) =>{
    console.log(value)
    if(moviesList.find(item => item.id === value.id)){
    }else{
      setList([...moviesList, value])
      }
    }
  

  return (
      <Router>
        <LeftBar activeMenu={activeMenu} forCloseMenu={forCloseMenu}/>
        <div className='contentContainer'>
          <Routes>
            <Route path='/' element={<Layout menuHandler={menuHandler}/>}>
              <Route index element={<HomePage />}/>
              <Route path='/movies' element={<MoviesPage addMovieToWatchlist={addMovieToWatchlist}/>}/>
              <Route path='/series' element={<SeriesPage addMovieToWatchlist={addMovieToWatchlist}/>}/>
              <Route path='/watchlist' element={<Watchlist removeMovieFromWatchlist={removeMovieFromWatchlist} moviesList={moviesList}/>}/>
              <Route path='/discover' element={<Discover addMovieToWatchlistFromSearch={addMovieToWatchlistFromSearch}/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
