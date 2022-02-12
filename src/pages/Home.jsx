import React from 'react';
import Movies from '../components/Movies';
import {useContext} from 'react'
import { listMovies } from '../context/ListMovies';
import TemaButton from '../components/TemaButton';
import {contextTema} from '../context/Temas'
import Header from '../components/Header/Header'
import BarraPeliFather from '../components/BarraPeli/BarraPeliFather';

export default function Home() {
    const {tema} = useContext(contextTema)
    const {movies} = useContext(listMovies)
  return <div className={`home ${tema}`}>
      <Header/>
      
      <h1>Movies</h1>
      <TemaButton/>
      <Movies movie={movies}/>
      <BarraPeliFather movie={movies}/>
  </div>;
}
