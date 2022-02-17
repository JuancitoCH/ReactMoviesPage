import React,{useContext} from 'react';
import { moviesContext } from '../../context/MoviesContext';


export default function ListarComentarios({idMovie,Comentarios}) {
  
  // const reviews = Comentarios
  
  return <div className='comments_divComments_listaComentarios'>
      {Comentarios.map((comentario,id)=><div className='comments_divComments_listaComentarios_unComentario' key={comentario+id}><img src="/UserProfileSvg.svg" className='comments_divComments_listaComentarios_unComentario_img' alt="" />
        <p className='comments_divComments_listaComentarios_unComentario_p'>{comentario.Comentario}</p>
        <p className='comments_divComments_listaComentarios_unComentario_Email'>{comentario.Email}</p>
        </div>)}
      
  </div>;
}
