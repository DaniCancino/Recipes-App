import React from 'react';
import './Posts.css'
import Recipe from './Recipe';

const Posts = ({posts, loading}) =>{
    if (loading) {
        return <h2 className='Loading'>Loading.....</h2>;
      }

    return(
        <div className='grid'>
             {posts.map(recipe =>(<Recipe key={recipe.id} title={recipe.title} image={recipe.image} diet={recipe.diets} loading={loading} />))}
        
        </div>
    )
}

export default Posts;