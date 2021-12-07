import React, { Component } from 'react';
import {useSelector} from 'react-redux';
import './RecipeDetail.css'


const RecipeDetail = () =>{
    const selector = useSelector((state) => state.filter)
    return(
        <div className= 'back'>
            <div className='Recipe-Detail'>
            <h3 className='title-detail'>{selector[0].title}</h3>
            <img src={selector[0].image} className='image-detail' alt='recipe-image'/>
            <div className='dish-type'>
                <span>type of plate:</span>
                {selector[0].dishTypes.map(e => <li className='dish-list'>{e}</li>)}
            </div>
            <div className='diet-type'>
                <span>Diet type:</span>
                {selector[0].diets.map(e => <li className='dish-list'>{e}</li>)}
            </div>
            <div className='big-container'>
            <article>
                <span className='subtitles'>Summary:</span>
                <p className='summary'>{selector[0].summary}</p>
            </article>
            <span className='subtitles'>- Score:  {selector[0].spoonacularScore} pts.</span>
            <span className='subtitles'>- Health Score:  {selector[0].healthScore} pts.</span>
            <article>
            <span className='subtitles' id='step'>Step by Step:</span>
                <ol>{selector[0].analyzedInstructions[0].steps.map((e) => <li>{e.step}</li>)}</ol>
            </article>
            </div>
            </div>
        </div>
    )
}


export default RecipeDetail
