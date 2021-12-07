import React, { useState }from 'react';
import {useDispatch} from 'react-redux'
import './filter.css'


const Filter = () =>{

    const [state, setState] = useState('')
    const [sorting, setSorting] = useState('')

    const dispatch = useDispatch()

    const filteredDiets = (state) =>{
        dispatch({
            type: 'FILTEREDBYDIET',
            payload: state
        })
    }

    const sortBy = () =>{
        dispatch({
            type: 'SORT',
            payload: sorting
        })
    }

  
    return(
        <div className='filter'>

            <select className='select' onChange={(e) => setState(e.target.value)}>
                    <option value='all'>Filter by diet type..</option>
                    <option value='gluten free'>Gluten Free</option>
                    <option value='vegan'>Vegan</option>
                    <option value='vegetarian'>Vegetarian</option>
                    <option value='lacto ovo vegetarian'>Lacto ovo vegetarian</option>
                    <option value='ovo-vegetarian'>Ovo-Vegetarian</option>
                    <option value='dairy free'>Dairy Free</option>
                    <option value='paleolithic'>Paleolithic</option>
                    <option value='primal'>Primal</option>
                </select>

                <button className= 'select-button' onClick={() =>filteredDiets(state)}>filtrar</button>

                <select className='select' onChange={(e) => setSorting(e.target.value)}>
                    <option value='all' selected>Sort by..</option>
                    <option value='higher-score'>Higher score</option>
                    <option value='lower-score'>Lower score</option>
                    <option value='ascending'>Ascending alphabetical order (A - Z)</option>
                    <option value='descending'>Descending alphabetical order (Z - A)</option>
                </select>

                    <button className= 'select-button' onClick={() =>sortBy(sorting)}>Sort</button>
        </div>
    )
}

export default Filter;