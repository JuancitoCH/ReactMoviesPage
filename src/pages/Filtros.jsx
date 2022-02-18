import React, { useEffect, useState } from 'react'
import CardMovie from '../components/Movies/CardMovie'
import Header from '../components/Header/Header'
import uniqid from 'uniqid'
import '../css/Filtros.css'
export default function Filtros() {
    const listaGeneros=["accion","aventura","ciencia ficcion","comedia","musical"]
    const [moviesGenere,setMoviesGenere] = useState([])
    const moviesFilter=(genero)=>{
        fetch("https://moiviesapi.rj.r.appspot.com/movies/genere/"+genero)
        .then(data=>data.json())
        .then(movies=>setMoviesGenere(movies))
    }
  return (
      <>
      <Header/>
      <div className='Header_EspacioBlancoFiltros'></div>
    <div className='pageFiltros_div'>
        <div className='listaGeneros'>
            <h1>Generos</h1>
        {listaGeneros.map(gen=>{
            return <button className='cadaGenero' value={gen} key={uniqid()} onClick={()=>{moviesFilter(gen)}}>{gen}</button>
        })}
        <div className='listaPeliculas'>

            {moviesGenere? moviesGenere.map(mov=><CardMovie key={uniqid()} movie={mov}/>) : <></>}
        </div>
        </div>
    </div>
 </>
  )
}
