import React from 'react';
import {Link} from 'react-router-dom'



export default function Movie({movie}){
  return <article className='movie'>
      
      <Link className='movie_Link' to={'/movies/'+movie.id }><h2>{movie.title}</h2></Link>
      <div className='movie_div'>
      <img className='movie_div_image' alt={movie.title} src={movie.poster}/>
      <p className='movie_estrellitas'>🔅🔅🔅🔅🔅</p>          
      </div>

  </article>;
}
