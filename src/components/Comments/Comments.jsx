import React,{useContext,useRef} from 'react';
import { listMovies } from '../../context/ListMovies';
import ListarComentarios from './ListarComentarios';
import '../../css/comments.css'

export default function Comments({comentarios,idMovie}) {
    const {movies,setMovies} = useContext(listMovies)
    const inputComentario = useRef(null)
    const comentar=()=>{
        if(inputComentario.current.value){

            movies.map(movie=>{
                if(movie.id===idMovie){
                    movie.comentarios = [...movie.comentarios,inputComentario.current.value]
                    inputComentario.current.value = ""
                }
                return movie
            })
            setMovies([...movies])
        }
    }
    function tecla(e){
        if (e.keyCode === 13) comentar()
    }
  return <div className='comments'>
      <p className='comments_p'>Comentarios</p>
      <div className='comments_divComments'>
          <div className='comments_divComments_team'>
          <img src="/UserProfileSvg.svg" className='comments_divComments_img' alt="" />
          <input onKeyDown={tecla} ref={inputComentario} type='text' className='comments_divComments_input' placeholder="Comment something..."></input>
          </div>
          <div className='comments_espacioBlanco'></div>
          <button onClick={comentar} className='comments_divComments_button'>comentar</button>
      </div>
      <ListarComentarios comentarios={comentarios} />
  </div>;
}
