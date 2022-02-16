import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Detalles from '../components/movieDetails/Detalles'
import Comments from '../components/Comments/Comments'
import Trailer from '../components/movieDetails/Trailer'
import '../css/MovieDetails.css'
export default function MovieDetails() {
    
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
    },[])


    // console.log(movie)
    
  return (
    <section className='app_home_movieDetails_section'>
        <div className='Fondo'></div>
        <div className='Espacio_Header'></div>
        
        <Detalles movie={movie} />
        <Trailer Trailer={movie.Trailer}/>
        <Comments idMovie={idMovie} Comentarios = {comentarios}/>
    </section>
  )
}
