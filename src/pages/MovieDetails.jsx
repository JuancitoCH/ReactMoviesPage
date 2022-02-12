import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { listMovies } from '../context/ListMovies';
import Movie from '../components/Movie'
import Detalles from '../components/Detalles'
import Comments from '../components/Comments/Comments'
import {contextTema} from '../context/Temas'
import TemaButton from '../components/TemaButton';
import Trailer from '../components/Trailer';
import Similares from '../components/Similares';

export default function MovieDetails() {
    
    const {movies}=useContext(listMovies)
    const {id} = useParams()
    const movie = movies.filter(movie=> movie.id ===id )[0]
    const {tema} = useContext(contextTema)
    return <div className={`movie_details ${tema}`}>
        <TemaButton/>
        <Detalles key={movie.id} movie={movie}></Detalles>
        <Trailer key={movie.id} movie={movie}></Trailer>
        <Comments comentarios={movie.comentarios} idMovie = {movie.id}/>
        <Similares movie={movies}/>
    </div>;
}
