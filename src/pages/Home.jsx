import React from 'react';
import Movies from '../components/Movies';
import {useContext} from 'react'
import { listMovies } from '../context/ListMovies';
import TemaButton from '../components/TemaButton';
import {contextTema} from '../context/Temas'

export default function Home() {
    const {tema} = useContext(contextTema)
    const {movies} = useContext(listMovies)
  return <div className={`home ${tema}`}>
      <h1>Movies</h1>
      <TemaButton/>
      <Movies movie={movies}/>
  </div>;
}
