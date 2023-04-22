import './app.css';
import React, { useState } from 'react';
import MovieSlider from '../MovieSlider/MovieSlider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HorizontalNav from '../horizontalNav/horizontalNav';
import { MoviesPage,SeriesPage } from '../pages';
import LeftBar from '../leftBar/leftBar';
import { ReactComponent as BurgerMenu } from '../leftBar/icons/burger.svg';

function App() {
  const [activeMenu,setMenuActive] = useState(false)

  const menuHandler = () => {
    setMenuActive(true)
    }

  const forCloseMenu = (data) => {
    setMenuActive(data)
  }
  return (
      <Router>
        <div
        onClick={() => menuHandler()}
        className='menu_burger'>
          <BurgerMenu/>
        </div>
        {activeMenu? <LeftBar className='leftBar_menu' forCloseMenu={forCloseMenu} />: <></>}
        <div className='contentContainer'>
          <HorizontalNav />
          <MovieSlider />
          <Routes>
            <Route path='/movies' element={<MoviesPage />}/>
            <Route path='/series' element={<SeriesPage />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
