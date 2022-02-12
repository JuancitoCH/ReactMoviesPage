import React,{useContext} from 'react'
import { moviesContext } from '../context/MoviesContext'
import {useParams} from 'react-router-dom'
import Detalles from '../components/movieDetails/Detalles'


export default function MovieDetails() {
    
    const {getMovieById} = useContext(moviesContext)
    //capturamos el id de la peli del url
    const {id:idMovie} = useParams()
    // hacemos uzo de una funcion definida en el contexto
    const movie = getMovieById(idMovie)
  return (
    <section className='app_home_movieDetails_section'>
        <Detalles movie={movie} />
    </section>
  )
}
