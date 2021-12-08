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

 let validate = (input) =>{
    let errors = {}
    
    if(!input.name){
        errors.name = 'Name is required'
    } else if(typeof(input.name) !== 'string'){
        errors.name = 'Debe ingresar al menos una letra'
    }else if(!Number.isInteger(parseInt(input.score))){
        errors.score = 'please enter a number between 1 and 100'
    } else if(!Number.isInteger(parseInt(input.level))){
        errors.level = 'please enter a number between 1 and 100'
    }
    return errors
}

const Add = () =>{
    const [form, setForm] = useState(initialState);
    const [check, setCheck] = useState(initialCheckState)
    const [errors, setErrors] = useState({});
    console.log(form)

    const handleChange = (e)=>{
        setForm({
            ...form, 
             [e.target.name]: e.target.value
          });

    setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
          }));

    }
    
    const handleReset = () =>{
        setForm(initialState)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        handleReset()
    }

    const checked = (e) =>{
            form.diet.push(e.target.value)
            if([e.target.name] === false){
                setCheck({...check, [e.target.name]: true})
            } else{
                setCheck({...check, [e.target.name]: false})
            }
    }
    

    return(
        <div className='Add'>
            <h1 className='add_title'>ADD NEW RECIPE</h1>
            <span className='obligatorio'>Las casillas marcadas con un asterisco (*) son obligatorias</span>
            <form className='form-add' onSubmit={handleSubmit}>
                <label className='label'>*NAME</label>
                <input type='text' name='name' id='name' value={form.name} onChange={handleChange}/>
                <p className='errors'>{errors.name}</p>
                <label className='label' >*SCORE</label>
                <input type='text' name='score' value={form.score}id='score'onChange={handleChange}/>
                <p className='errors'>{errors.score}</p>
                <label className='label'>*FOOD LEVEL</label>
                <input type='text' name='level' value={form.level} id='level' onChange={handleChange}/>
                <p className='errors'>{errors.level}</p>
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