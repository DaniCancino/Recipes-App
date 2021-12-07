import React, { useEffect, useState } from 'react';
import Filter from './filter';
import './Home.css'
import Recipe from './Recipe';
import Pagination from './Pagination';
import Posts from './Posts';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux'


// const api1= 671cef72b5aa4789baf05df16611c658
// const api2 = 8322db0795194094af7f01b8896bd299
// const api3 = 8ad03076faf14bb1b08925504a99dffa
//'https://api.spoonacular.com/recipes/informationBulk?apiKey=671cef72b5aa4789baf05df16611c658&ids=715538,715594,715497'

const Home = () =>{
    const store = useSelector((state) => {
        if(state.filteredByName.length > 0){
            return state.filteredByName
        } else if(state.filteredByDiet.length > 0){
            return state.filteredByDiet
        }else if(state.sorted.length > 0){
            return state.sorted
        }else{
            return state.listRecipe
        }
    })
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    const getRecipe = async () =>{
        try{
            setLoading(true);
        const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=8ad03076faf14bb1b08925504a99dffa&addRecipeInformation=true&number=90')
        const data = await response.json()
        const resource = data.results;
        dispatch({
            type: 'GET_RECIPE',
            payload: resource
        })
        setLoading(false);
        }catch(error){console.log(error)}
    }

    useEffect(()=>{
        getRecipe()
    }, []);

    const handleClick = (num) =>{
        setCurrentPage(num)
    } 
    //store.slice(indexOfFirstPost, indexOfLastPost)
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = store.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(currentPage + 1);

    return(
        <div className='Home'>
            <Filter />
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={store.length} paginate={paginate} handleClick={handleClick}/>
            <Footer />
        </div>
    )
}


export default Home;