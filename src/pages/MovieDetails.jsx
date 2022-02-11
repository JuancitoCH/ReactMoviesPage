import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { listMovies } from '../context/ListMovies';
import Movie from '../components/Movie'
import Comments from '../components/Comments/Comments'
import {contextTema} from '../context/Temas'
import TemaButton from '../components/TemaButton';

export default function MovieDetails() {
    
    const {movies}=useContext(listMovies)
    const {id} = useParams()
    const movie = movies.filter(movie=> movie.id ===id )[0]
    
    const {tema} = useContext(contextTema)
    return <div className={`movie_details ${tema}`}>
        <h1>{movie.title}</h1>
        <TemaButton/>
        <Movie key={movie.id} movie={movie}></Movie>
        <Comments idMovie = {movie.id}/>
    </div>;
}
