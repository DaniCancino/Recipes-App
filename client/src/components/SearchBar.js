import {React, useState} from 'react';
import './SearchBar.css'

const SearchBar = () =>{
    const [element, setElement] = useState("");
    console.log(element)

    return(
        <div className = 'search-bar'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setElement("");
                  }}>
                <input type='text'
                placeholder='Search recipe..'
                className= 'input'
                value={element}
                onChange={e => setElement(e.target.value)}
                ></input>
                <button type='submit' value='Buscar' className='search'>Search</button>
            </form>

        </div>
    )
}

export default SearchBar;