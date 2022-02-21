import React, { useState } from 'react'
import { useRef } from 'react'
import CardMovie from '../components/Movies/CardMovie'
import Trailer from '../components/movieDetails/Trailer'
import Header from '../components/Header/Header'
import '../css/CreatMovie.css'
export default function CreatMovie() {
    const titulo = useRef()
    const descripcion = useRef()
    const poster = useRef()
    const banner = useRef()
    const cast = useRef()
    const genero = useRef()
    const trailer = useRef()
    const [movie,setMovie] = useState({})
    function crear(){
        setMovie({
            Title:titulo.current.value,
            Sinopsis:descripcion.current.value,
            Poster:poster.current.value,
            Banner : banner.current.value,
            Cast:cast.current.value,
            Genere:genero.current.value,
            Trailer:trailer.current.value,
            Raiting:1,
            Release:Date.now()
            
        })
    }
  return (
<>
    <div className='crearMovies_div'>

        <Header/>

        <div>

        <p>titulo</p>
        <input type="text" ref={titulo} onChange={crear}/>
        <p>descripcion</p>
        <input type="text" ref={descripcion} onChange={crear}/>
        <p>poster</p>
        <input type="text" ref={poster} onChange={crear}/>
        <p>banner</p>
        <input type="text" ref={banner} onChange={crear}/>
        <p>cast</p>
        <input type="text" ref={cast} onChange={crear}/>
        <p>genero</p>
        <input type="text" ref={genero} onChange={crear}/>
        <p>trailer</p>
        <input type="text" ref={trailer} onChange={crear}/>
        <button onClick={crear}> Crear</button>
        </div>

        {
        movie? <>
            <CardMovie movie={movie}/>
            <img src={movie.Banner} className="creacion_img" alt={movie.Title} style={{width:'100vh'}}/>
            <p>{movie.Sinopsis}</p>
        </>  : <p>Nada Creado</p>

        }

    </div>
    <Trailer Trailer={movie.Trailer}/>
</>
  )
}
