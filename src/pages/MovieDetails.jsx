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
    // console.log(comentarios)

    // console.log(movie)
    
  return (
    <>
    <Header/>
        <div className='Fondo'></div>
    <section className='app_home_movieDetails_section'>
        {/* <div className='Espacio_Header'></div> */}
        <Detalles movie={movie} />
        <Trailer Trailer={movie.Trailer}/>
        <Comments idMovie={idMovie} Comentarios = {comentarios} />
    </section>
    </>
  )
}
