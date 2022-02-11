import React,{useContext,useRef} from 'react';
import { listMovies } from '../../context/ListMovies';
import ListarComentarios from './ListarComentarios';
import '../../css/comments.css'



export default function Comments({idMovie}) {
    const {movies,addReview} = useContext(listMovies)
    const inputComentario = useRef(null)
    // console.log(movies)
  return <div className='comments'>
      <p className='comments_p'>Comentarios</p>
      <div className='comments_divComments'>
          <div className='comments_divComments_team'>
          <img src="/UserProfileSvg.svg" className='comments_divComments_img' alt="" />
          <input  ref={inputComentario} type='text' className='comments_divComments_input' placeholder="Comment something..."></input>
          </div>
          <div className='comments_espacioBlanco'></div>
          
          <button onClick={()=>{addReview({type:"addComentario",payloads:{idMovie,comentario:inputComentario.current.value}});inputComentario.current.value=""}} className='comments_divComments_button'>comentar</button>
      </div>
      <ListarComentarios idMovie={idMovie} />
  </div>;
}
