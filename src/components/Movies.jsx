import React from 'react';
import CardMovie from './CardMovie';
export default function Movies({movie:movies}) {
  return <section className='movies'>
      {movies.map(movie=><CardMovie key={movie.id} movie={movie}></CardMovie>)}
  </section>;
}
