import React,{useContext,useRef} from 'react';
import {moviesContext} from '../../context/MoviesContext'
import ListarComentarios from './ListarComentarios';
import '../../css/comments.css'



export default function Comments({idMovie,Comentarios}) {
    console.log(Comentarios)
    const {addNewReview} = useContext(moviesContext)
    const inputComentario = useRef(null)
  return <div className='comments dark'>
      <p className='comments_p'>Comentarios</p>
      <div className='comments_divComments'>
          <div className='comments_divComments_team'>
          <img src="/UserProfileSvg.svg" className='comments_divComments_img' alt="" />
          <input  ref={inputComentario} type='text' className='comments_divComments_input' placeholder="Comment something..."></input>
          </div>
          <div className='comments_espacioBlanco'></div>
          <button onClick={()=>{addNewReview({type:"addReviewReducer",payloads:{idMovie,newReview:inputComentario.current.value}});inputComentario.current.value=""}} className='comments_divComments_button'>comentar</button>
      </div>
      <ListarComentarios idMovie={idMovie} Comentarios={Comentarios} />
  </div>;
}
