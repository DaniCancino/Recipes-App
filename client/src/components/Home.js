import React, { Component, useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import Filter from './filter';
import './Home.css'
import Recipe from './Recipe';
import Pagination from './Pagination';
import Posts from './Posts';
import Footer from './Footer';

const API_KEY= '671cef72b5aa4789baf05df16611c658'
const apikey = '8322db0795194094af7f01b8896bd299'
//'https://api.spoonacular.com/recipes/informationBulk?apiKey=671cef72b5aa4789baf05df16611c658&ids=715538,715594,715497'

const Home = () =>{

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(()=>{
        const getRecipe = async () =>{
            setLoading(true);
            const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=8322db0795194094af7f01b8896bd299&addRecipeInformation=true&number=90')
            const data = await response.json()
            const resource = data.results;
            setRecipes(resource);
            setLoading(false);
        }
        getRecipe()
    }, []);

    const handleClick = (num) =>{
        setCurrentPage(num)
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(currentPage + 1);


    return(
        <div className='Home'>
            <Filter />
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={recipes.length} paginate={paginate} handleClick={handleClick}/>
            <Footer />
        </div>
    )
}

export default Home;