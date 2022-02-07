import React from 'react';
import Movies from '../components/Movies';
import {useContext} from 'react'
import {contextTema} from '../context/Temas'
import { listMovies } from '../context/ListMovies';


export default function Home() {
    const {movies} = useContext(listMovies)
    const {tema,setTema} = useContext(contextTema)
    const cambiarTema=()=>{
        if (tema==='light') return setTema('dark')
        return setTema('light')
    }
  return <div className={`home ${tema}`}>
      <h1>Movies</h1>
      <button onClick={cambiarTema} className={'home'}>{tema}</button>
      <Movies movie={movies}/>
  </div>;
}
