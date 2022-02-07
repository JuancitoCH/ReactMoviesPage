import React from 'react';
import Movie from './Movie';
export default function Movies({movie:movies}) {
  return <section className='movies'>
      {movies.map(movie=><Movie key={movie.id} movie={movie}></Movie>)}
  </section>;
}
