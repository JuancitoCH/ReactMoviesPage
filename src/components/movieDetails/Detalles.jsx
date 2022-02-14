import React from 'react';
import { Link } from 'react-router-dom'
import '../../css/detalles.css'

export default function Detalles({ movie }) {


    /*const add = () => {
        let comment = comentario.current.value;
        let starts = rating.current.value;
        addReview(movie, starts, comment);
    }
    

    const addReview */
    console.log(movie)
    return (
        <> {/*Armo un fragment para poner el último div*/}
            <div className='principal'>
                <div className='contenedor'> {/*Toda la clase contenedor está en modo inline-block*/}

                    <div className='imagen'>
                        <img className='imagen__img' alt={movie.Title} src={movie.Poster} />
                    </div>
                    <header className='titulo'>
                        <Link className='titulo__Link' to={'/movie/' + movie._id}>
                            <h2 className='titulo__nombre'>{movie.Title + ' (' + 22 + ')'}</h2>
                        </Link>
                    </header>
                    <div className='ranking'>
                        <span className='detalles__estrellitas'>🔅🔅🔅🔅🔅</span>
                        {/* <span>{movie.duracion}</span> */}
                    </div>

                    <div className='descripcion'>
                        <p className='descripcion__p'>{movie.Sinopsis}</p>
                    </div>

                    <div className='participantes'>
                        {/* <p className='participantes__p'>Director: {movie.director}</p> */}
                        {/* <p className='participantes__p'>Actores: {movie.Cast}</p> */}
                    </div>

                </div>
                {/*Este div de abajo sirve para separar los detalles del trailer*/}
                <div className='espacio'></div>
            </div>
        </>
    );

}
