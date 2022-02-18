import React, { useContext } from 'react'
import BarraPeli from './BarraPeli'
import { moviesContext } from "../../context/MoviesContext";
import uniqid from "uniqid";
export default function BarraPeliFather() {
  const {moviesState:{movies}} = useContext(moviesContext);
  const moviesReducido = [...movies].slice(0, 3);
  return (
    <section className="BarraPelis">
      <h2 className="Barra-Peli-title">Lo mas popular</h2>
      {moviesReducido.map((movie) => (
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
