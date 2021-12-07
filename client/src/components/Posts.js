import React from 'react';
import './Posts.css'
import Recipe from './Recipe';

const Posts = ({posts, loading}) =>{
    if (loading) {
        return <h2 className='Loading'>Loading.....</h2>;
      }

    return(
        <div className='grid'>
             {posts.map(element =>(<Recipe key={element.id} 
             title={element.title} 
             image={element.image} 
             diet={element.diets} 
             id={element.id}
             score={element.spoonacularScore}
             loading={loading} />))}
        
        </div>
    )
}

export default Posts;