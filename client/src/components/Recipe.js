import React from 'react';
import './Recipe.css'

const Recipe = ({title, image, diet, loading}) =>{
    if (loading) {
        return <h2 className='Loading'>Loading...</h2>;
      }

    return(
        <div className='Recipe'>
            <h4>{title}</h4>
            <img src={image} className='image' alt=''/>
            <div>
                {diet.map(e=><span className='span'>{e}, </span>)}
            </div>
            <button className='view_button'>View..</button>
        </div>
    )
}

export default Recipe;