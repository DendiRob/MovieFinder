import React, { useEffect, useState } from 'react';
import './discover.css'
import DiscoverCard from '../discoverCard/discoverCard';



const Discover = ({addMovieToWatchlistFromSearch,moviesList}) => {
    const [searchList, setList] = useState([])
    const [value,setValue] = useState('')

    const searchAPI = async (value) => {
        const url = `http://www.omdbapi.com/?s=${value}&apikey=d2a9e0c9`
        const res = await fetch(url)
        const resJson = await res.json()
        if(resJson.Search){
         setList(resJson.Search)
        }
    } 

    useEffect(() => {
        searchAPI(value)
    },[value])

    return(
        <div className='discoverWrapper'>
            <div className='form'>
                <form onSubmit={e => { 
                    e.preventDefault();
                 }}>
                    <input
                    type='text'
                    placeholder='Search'
                    className='discoverInput'
                    onChange={(event) => setValue(event.target.value)}/>
                </form>
            </div>
            <div className='searchWrapper'>
                <h1>Search</h1>
                <ul className='searchList'  >
                    {searchList.map(item => {
                            return <DiscoverCard 
                            moviesList={moviesList}
                            key={item.imdbID} 
                            searchList={item}
                            addMovieToWatchlistFromSearch={addMovieToWatchlistFromSearch}
                            />
                        })}
                </ul>
            </div>
        </div>
    )
}
export default Discover