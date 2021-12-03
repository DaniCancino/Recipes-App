import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, handleClick }) =>{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }

      const scroll = (number) =>{
        window.scroll(0,0)
        handleClick(number)
      }
    
      return (
        <nav>
          <ul className='pagination'>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <Link onClick={() => scroll(number)} to='/home' className='page-link'>
                  {number}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      );
}

export default Pagination;