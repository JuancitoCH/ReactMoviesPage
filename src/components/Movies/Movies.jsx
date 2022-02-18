import React,{useContext} from 'react'
import uniqid from 'uniqid'
import CardMovie from './CardMovie'
import {moviesContext} from '../../context/MoviesContext'
import "../../css/movies.css"

export default function Movies() {
  // movies es la coleccion de pelis en el objeto moviesState
  const {moviesState:{movies}} = useContext(moviesContext)
  const moviesReducido= [...movies].slice(0,5)
  return (
    <section className="movies margin">
      {moviesReducido.map((eachMovie) => {
        return <CardMovie movie={eachMovie} key={uniqid()} />;
      })}
    </section>
  );
}
