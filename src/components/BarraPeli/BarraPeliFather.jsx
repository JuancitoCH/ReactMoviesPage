import React, { useContext } from 'react'
import BarraPeli from './BarraPeli'
import { moviesContext } from "../../context/MoviesContext";
import uniqid from "uniqid";
export default function BarraPeliFather() {
  const {moviesState:{movies}} = useContext(moviesContext);
  return (
    <section className='BarraPelis'>
      {movies.map((movie) => (
        <BarraPeli
          key={uniqid()}
          img={movie.Banner}
          titulo={movie.Title}
          description={movie.Sinopsis}
        />
      ))}
    </section>
  );
}
