import './app.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, MoviesPage,SeriesPage } from '../pages';
import LeftBar from '../leftBar/leftBar';
import Layout from '../layout/layout';
import Watchlist from '../watchlist/watchlist';

function App() {
  const [activeMenu,setMenuActive] = useState(false)

  const menuHandler = (data) => {
    setMenuActive(data)
    }

  const forCloseMenu = (data) => {
    setMenuActive(data)
  }
  return (
      <Router>

        {activeMenu? <LeftBar className='leftBar_menu' forCloseMenu={forCloseMenu} />: <></>}

        <div className='contentContainer'>
          <Routes>
            <Route path='/' element={<Layout menuHandler={menuHandler} />}>
              <Route index element={<HomePage />}/>
              <Route path='/movies' element={<MoviesPage />}/>
              <Route path='/series' element={<SeriesPage />}/>
              <Route path='/watchlist' element={<Watchlist/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
