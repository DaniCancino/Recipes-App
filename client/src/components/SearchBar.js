import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css'


const SearchBar = () =>{
    const [search, setSearch] = useState("");
    const dispatch = useDispatch()

    const searchByName = () =>{
        dispatch({
            type: 'FILTERED_BY_NAME',
            payload: search
        })
    }


    return(
        <div className = 'search-bar'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    searchByName();
                    setSearch("");
                  }}>
                <input type='text'
                placeholder='Search recipe..'
                className= 'input'
                value={search}
                onChange={e => setSearch(e.target.value)}
                ></input>
                <button type='submit' value='Buscar' className='search'>Search</button>
            </form>

        </div>
    )
}

export default SearchBar;