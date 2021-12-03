import {React, useState} from 'react';
import './Add.css';
import Footer from './Footer';

const initialState = {
    title: "",
    score: "",
    level: "",
    resumen: "",
    step: "",
    vegetarian: ""
}


const Add = () =>{
    const [form, setForm] = useState(initialState);

    const handleChange = (e)=>{
        setForm({
            ...form, 
             [e.target.name]: e.target.value
          });
          console.log(form);
    }

    const handleReset = () =>{
        setForm(initialState)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        handleReset()
      }

    return(
        <div className='Add'>
            <h1 className='add_title'>ADD NEW RECIPE</h1>
            <span className='obligatorio'>Las casillas marcadas con un asterisco (*) son obligatorias</span>
            <form className='form-add' onSubmit={handleSubmit}>
                <label className='label'>*NAME</label>
                <input type='text' name='title' id='name' value={form.title} onChange={handleChange}></input>
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
                <span><input name='vegetarian'type='checkbox' value='vegetarian' onClick={handleChange}></input> Vegetarian</span>
                <span><input type='checkbox' value='gluten Free'></input> Gluten Free</span>
                <span><input type='checkbox' value='vegan'></input> Vegan</span>
                <span><input type='checkbox' value='dairyFree'></input> DairyFree</span>
                <span><input type='checkbox' value='paleolithic'></input> Paleolithic</span>
                <span><input type='checkbox' value='primal'></input> Primal</span>
                <span><input type='checkbox' value='ovo-Vegetarian'></input> Ovo-Vegetarian</span>
                <span><input type='checkbox' value='lacto ovo vegetarian'></input> Lacto ovo vegetarian</span>
                </div>
                <button type='submit' className='submit_button'>ADD</button>
            </form>
            <Footer />
        </div>
    )
}

export default Add;