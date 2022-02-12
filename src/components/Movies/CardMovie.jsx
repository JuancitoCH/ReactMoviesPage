import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/card.css';

export default function CardMovie({movie}) {
    return (
        <article className='card'>
            {/* Creo un artículo que será cada card */}
            <div className='cara frente'>
                {/* Hago el frente de la card con dos clases */}
                <img alt={movie.title} src={movie.poster} />
                <h2>{movie.title + ' (' + movie.año + ')'}</h2>
            </div>
            <div className="cara atras">
                <h2>{movie.title}</h2>
                <p>{movie.año}</p>
                <p className='card__stars'>🔅🔅🔅🔅🔅</p>
                {/* Esto lo vamos a cambiar cuando tengamos el addReview listo */}
                <p>Calificación: 4,5</p>
                <Link className='link' to={'/movie/' + movie.id}>{movie.title}</Link>
            </div>
        </article>

    );
}