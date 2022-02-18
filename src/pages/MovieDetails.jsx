import React,{useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { moviesContext } from '../context/MoviesContext'
import Detalles from '../components/movieDetails/Detalles'
import Comments from '../components/Comments/Comments'
import Trailer from '../components/movieDetails/Trailer'
import Header from '../components/Header/Header'
import '../css/MovieDetails.css'
export default function MovieDetails() {
    const {actualizar} = useContext(moviesContext)
    const [movie,setMovie] = useState({})
    const [comentarios,setComentarios] = useState([])
    //capturamos el id de la peli del url
    
    const {id:idMovie} = useParams()
    useEffect(()=>{
      fetch("https://moiviesapi.rj.r.appspot.com/movies/"+idMovie)
      .then(data=>data.json())
      .then(movieDetails=>{
        setMovie(movieDetails.Movie)
        setComentarios(movieDetails.Comentarios)
      })
    },[actualizar])
    
  return (
    <div
      className="Movie-Details-colorFondo"
      style={{ backgroundImage: `url(${movie.Banner})` }}
    >
      <Header />
      {/* <div className='Fondo' style={{ backgroundImage: `url(${movie.Banner})` }}></div> */}
      <section className="Movie-Details-SectionMain">
        {/* <div className='Espacio_Header'></div> */}
        <Detalles movie={movie} raiting={comentarios}/>
        <Trailer Trailer={movie.Trailer} />
        <Comments idMovie={idMovie} Comentarios={comentarios} />
      </section>
    </div>
  );
}
