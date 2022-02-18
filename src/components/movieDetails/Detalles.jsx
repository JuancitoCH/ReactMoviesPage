import React from 'react';
import { Link } from 'react-router-dom'
import '../../css/detalles.css'
export default function Detalles({ movie, raiting }) {

    function sacarAño (dato) {
        let año = "";
        año = dato;
        return año.substring(0,4);
    }
    // console.log(movie)
    
    function Raiting(){
        let promedio=0;
        raiting.map((objt) => promedio+=  objt.Raiting);
        //console.log(promedio)
        const promediofloat=promedio / (raiting.length);
        promedio = Math.floor(promedio / raiting.length);
        switch(promedio){
            case 1:
                return `🔅(${promediofloat})`;
            case 2:
                return `🔅🔅(${promediofloat})`;
            case 3:
                return `🔅🔅🔅(${promediofloat})`;
            case 4:
                return `🔅🔅🔅🔅(${promediofloat})`;
            case 5:
                return `🔅🔅🔅🔅🔅(${promediofloat})`;
            default:
                return `🔅🔅🔅🔅🔅(${promediofloat})`;
        }
    }
    return (
            <div className='principal'>
                <div className='contenedor'> {/*Toda la clase contenedor está en modo inline-block*/}

                    <div className='imagen'>
                        <img className='imagen__img' alt={movie.Title} src={movie.Poster} />
                    </div>
                    <header className='titulo'>
                        <h2 className='titulo__nombre'>{movie.Title + ' (' + 2021 + ')'}</h2>
                    </header>
                    <div className='ranking'>
                        <span className='detalles__estrellitas'>{Raiting()}</span>
                    </div>

                    <div className='descripcion'>
                        <p className='descripcion__p'>{movie.Sinopsis}</p>
                    </div>

                    <div className='participantes'>
                        <p className='participantes__p'>Género: {movie.Genere}</p> 
                        <p className='participantes__p'>Actores: {movie.Cast}</p>
                    </div>

                </div>
                {/*Este div de abajo sirve para separar los detalles del trailer*/}
                <div className='espacio'></div>
            </div>
    );}
