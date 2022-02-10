import React from 'react';
import { Link } from 'react-router-dom'
import '../css/detalles.css'

export default function Detalles({ movie }) {


    /*const add = () => {
        let comment = comentario.current.value;
        let starts = rating.current.value;
        addReview(movie, starts, comment);
    }
    

    const addReview */

    return (
        <> {/*Armo un fragment para poner el último div*/}
            <div className='principal'>
                <div className='contenedor'> {/*Toda la clase contenedor está en modo inline-block*/}

                    <div className='imagen'>
                        <img className='imagen__img' alt={movie.title} src={movie.poster} />
                    </div>
                    <header className='titulo'>
                        <Link className='titulo__Link' to={'/movies/' + movie.id}>
                            <h2 className='titulo__nombre'>{movie.title + ' (' + movie.año + ')'}</h2>
                        </Link>
                    </header>
                    <div className='ranking'>
                        <span className='detalles__estrellitas'>🔅🔅🔅🔅🔅</span>
                        <span>{movie.duracion}</span>
                    </div>

                    <div className='descripcion'>
                        <p className='descripcion__p'>{movie.descripcion}</p>
                    </div>

                </div>
                {/*Este div de abajo sirve para separar los detalles del trailer*/}
                <div className='espacio'></div>
            </div>
        </>
    );

}
