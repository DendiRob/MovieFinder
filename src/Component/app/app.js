import './app.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, MoviesPage,SeriesPage } from '../pages';
import LeftBar from '../leftBar/leftBar';
import Layout from '../layout/layout';
import Watchlist from '../watchlist/watchlist';

function App() {
  const [activeMenu,setMenuActive] = useState(false);
  const [moviesList,setList] = useState([]);

  const menuHandler = (data) => {
    setMenuActive(data)
    }

  const forCloseMenu = (data) => {
    setMenuActive(data)
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
        day: value.releaseDate.day,
        month: value.releaseDate.month,
        year: value.releaseDate.year
      }
      setList([...moviesList, newMovie])
    }
  }
  return (
      <Router>

        {activeMenu? <LeftBar className='leftBar_menu' forCloseMenu={forCloseMenu} />: <></>}

        <div className='contentContainer'>
          <Routes>
            <Route path='/' element={<Layout menuHandler={menuHandler} />}>
              <Route index element={<HomePage />}/>
              <Route path='/movies' element={<MoviesPage addMovieToWatchlist={addMovieToWatchlist}/>}/>
              <Route path='/series' element={<SeriesPage addMovieToWatchlist={addMovieToWatchlist}/>}/>
              <Route path='/watchlist' element={<Watchlist moviesList={moviesList}/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
