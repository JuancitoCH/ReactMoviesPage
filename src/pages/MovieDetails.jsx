import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import { moviesContext } from '../context/MoviesContext'
import Detalles from '../components/movieDetails/Detalles'
import Comments from '../components/Comments/Comments'


export default async function MovieDetails() {
    
    const {getMovieById} = useContext(moviesContext)
    //capturamos el id de la peli del url
    const {id:idMovie} = useParams()
    // hacemos uzo de una funcion definida en el contexto
    const movie = await getMovieById(idMovie)

  return (
    <section className='app_home_movieDetails_section'>
        
        {/* <Detalles movie={movie} /> */}
        {/* <Comments idMovie={idMovie}/> */}
    </section>
  )
}
