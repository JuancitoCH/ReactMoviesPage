import React, { useContext } from 'react'
import BarraPeli from './BarraPeli'
import { moviesContext } from "../../context/MoviesContext";
import uniqid from "uniqid";
export default function BarraPeliFather() {
  const {moviesState:{movies}} = useContext(moviesContext);
  const moviesPopulation = movies.sort((a, b) => a.Raiting - b.Raiting);
  const moviesPopRed = moviesPopulation.reverse().slice(0, 3);
  return (
    <section className="BarraPelis">
      <h2 className="Barra-Peli-title shadow">Lo Más Popular</h2>
      {moviesPopRed.map((movie) => (
        <BarraPeli
          key={uniqid()}
          img={movie.Banner}
          titulo={movie.Title}
          description={movie.Sinopsis}
          id={movie._id}
        />
      ))}
    </section>
  );
}
