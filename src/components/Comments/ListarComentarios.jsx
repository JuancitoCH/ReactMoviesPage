import React,{useContext} from 'react';
import { moviesContext } from '../../context/MoviesContext';


export default function ListarComentarios({idMovie}) {
  const {getReviewsById} = useContext(moviesContext)
  const reviews = getReviewsById(idMovie)
  
  return <div className='comments_divComments_listaComentarios'>
      {reviews.map((comentario,id)=><div className='comments_divComments_listaComentarios_unComentario' key={comentario+id}><img src="/UserProfileSvg.svg" className='comments_divComments_listaComentarios_unComentario_img' alt="" />  <p className='comments_divComments_listaComentarios_unComentario_p'>{comentario}</p></div>)}
      
  </div>;
}
