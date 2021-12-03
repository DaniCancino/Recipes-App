import React from 'react';
import './filter.css'


const Filter = () =>{
    return(
        <div className='filter'>
            <select className='select'>
                    <option>Gluten Free</option>
                    <option>Vegan</option>
                    <option>Vegetarian</option>
                    <option>Lacto ovo vegetarian</option>
                    <option>Ovo-Vegetarian</option>
                    <option>dairyFree</option>
                    <option>Paleolithic</option>
                    <option>Primal</option>
                </select>
                <select className='select'>
                    <option>Higher score</option>
                    <option>Lower score</option>
                    <option>Ascending alphabetical order (A - Z)</option>
                    <option>Descending alphabetical order (Z - A)</option>
                </select>
        </div>
    )
}

export default Filter;