import React,{useContext,useRef} from 'react';
import { listMovies } from '../context/ListMovies';
import ListarComentarios from './ListarComentarios';

export default function Comments({comentarios,idMovie}) {
    const {movies,setMovies} = useContext(listMovies)
    const inputComentario = useRef(null)
    const comentar=()=>{
        movies.map(movie=>{
            if(movie.id===idMovie){
                movie.comentarios = [...movie.comentarios,inputComentario.current.value]
                inputComentario.current.value = ""
            }
            return movie
        })
        setMovies([...movies])
    }
    function tecla(e){
        if (e.keyCode === 13) comentar()
    }
  return <div className='commets'>
      <input onKeyDown={tecla} ref={inputComentario} type='text' placeholder="Coment..."></input>
      <button onClick={comentar}>comentar</button>
      <ListarComentarios comentarios={comentarios} />
  </div>;
}
