import {React, useState} from 'react';
import './Add.css';
import Footer from './Footer';
import {addRecipe} from '../redux/actions/actions'

const initialState = {
    name: "",
    score: "",
    level: "",
    resumen: "",
    step: "",
    diet: []
}

const initialCheckState = {
    gluten_Free: false,
    vegetarian: false,
    vegan: false,
    dairyFree: false,
    paleolithic: false,
    primal: false,
    ovo_Vegetarian: false,
    lacto_ovo_vegetarian:false
}


const Add = ({addRecipe}) =>{
    const [form, setForm] = useState(initialState);
    const [check, setCheck] = useState(initialCheckState)
    console.log(form)

    const handleChange = (e)=>{
        setForm({
            ...form, 
             [e.target.name]: e.target.value
          });

    }
    
    const handleReset = () =>{
        setForm(initialState)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        addRecipe(form)
        handleReset()
    }

    const checked = (e) =>{
            form.diet.push(e.target.value)
            if([e.target.name] === false){
                setCheck({...check, [e.target.name]: true})
            } else{
                setCheck({...check, [e.target.name]: false})
            }
            console.log(form);
            console.log(check)
         
    }
    

    return(
        <div className='Add'>
            <h1 className='add_title'>ADD NEW RECIPE</h1>
            <span className='obligatorio'>Las casillas marcadas con un asterisco (*) son obligatorias</span>
            <form className='form-add' onSubmit={handleSubmit}>
                <label className='label'>*NAME</label>
                <input type='text' name='name' id='name' value={form.name} onChange={handleChange}></input>
                <label className='label' >*SCORE</label>
                <input type='text' name='score' value={form.score}id='score'onChange={handleChange}></input>
                <label className='label'>*FOOD LEVEL</label>
                <input type='text' name='level' value={form.level} id='level' onChange={handleChange}></input>
                <label className='label'>*RECIPE RESUME</label>
                <textarea  name='resumen' value={form.resumen}id='resumen' onChange={handleChange}></textarea>
                <label className='label'>*STEP BY STEP</label>
                <textarea name='step' value={form.step} id='step' onChange={handleChange}></textarea>
                <label className='label'>*DIETS</label>
                <div className='diets'>
                <span><input name='vegetarian'type='checkbox' value='vegetarian' onClick={checked}></input> Vegetarian</span>
                <span><input type='checkbox' name ='gluten_Free' value='gluten Free'onClick={checked} ></input> Gluten Free</span>
                <span><input type='checkbox' name='vegan' value='vegan' onClick={checked}></input> Vegan</span>
                <span><input type='checkbox' name='dairyFree' value='dairyFree' onClick={checked}></input> DairyFree</span>
                <span><input type='checkbox' name='paleolithic' value='paleolithic' onClick={checked}></input> Paleolithic</span>
                <span><input type='checkbox' name='primal' value='primal' onClick={checked}></input> Primal</span>
                <span><input type='checkbox' name='ovo_Vegetarian' value='ovo-Vegetarian' onClick={checked}></input> Ovo-Vegetarian</span>
                <span><input type='checkbox' name='lacto_ovo_vegetarian' value='lacto ovo vegetarian' onClick={checked}></input> Lacto ovo vegetarian</span>
                </div>
                <button type='submit' className='submit_button'>ADD</button>
            </form>
            <Footer />
        </div>
    )
}

export default Add;