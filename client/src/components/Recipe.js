import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import './Recipe.css'

const Recipe = ({title, image, diet, loading, id, score}) =>{

    const dispatch = useDispatch()
  
    const recipeDetail = (id) =>{
        dispatch({
            type: 'RECIPEDETAIL',
            payload: id
        })
        window.scroll(0,0)
    }
    if (loading) {
        return <h2 className='Loading'>Loading...</h2>;
      }

    return(
        <div className='Recipe'>
            <h4>{title}</h4>
            <img src={image} className='image' alt='recipe-image'/>
            <div>
                {diet.map(e=><span className='span'>{e}, </span>)}
            </div>
           
           <Link to={`/home/${id}`}><button className='view_button' onClick={() =>recipeDetail(id)}>See more...</button></Link>
           <span className='recipe_score'>Score: {score}</span>
        </div>
    )
}

export default Recipe;