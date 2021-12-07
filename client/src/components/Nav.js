import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';


const scroll = () =>{
    window.scroll(0,0)
  }

const Nav = () =>{ 
    const dispatch = useDispatch()
    const state = useSelector((state) => state.listRecipe)
    const resetHome = () =>{
        dispatch({
            type: 'RESET_HOME',
            payload: state
        })
        window.scroll(0,0)
    }
    return(
        <div className='Nav'>
            <Link className='links' id ='home' to='/home' className='link' onClick={resetHome}>HOME</Link>
            <Link className='links' id ='add' to='/home/add' onClick={scroll} className='link'>ADD RECIPE</Link>
            <SearchBar />
        </div>
    )
}

export default Nav;