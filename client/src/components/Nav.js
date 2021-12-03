import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import SearchBar from './SearchBar';


const scroll = (number) =>{
    window.scroll(0,0)
  }

const Nav = () =>{
    return(
        <div className='Nav'>
            <Link className='links' id ='home' to='/home' className='link'>HOME</Link>
            <Link className='links' id ='add' to='/home/add' onClick={scroll} className='link'>ADD RECIPE</Link>
            <SearchBar />
        </div>
    )
}

export default Nav;