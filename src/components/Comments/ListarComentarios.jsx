import React,{useContext} from 'react';
import { listMovies } from '../../context/ListMovies';


export default function ListarComentarios({idMovie}) {
  const {movies} = useContext(listMovies)
  const movie = movies.filter(peli=> peli.id===idMovie)[0]
  const comentarios = movie.comentarios
  return <div className='comments_divComments_listaComentarios'>
      {comentarios.map((comentario,id)=><div className='comments_divComments_listaComentarios_unComentario' key={comentario+id}><img src="/UserProfileSvg.svg" className='comments_divComments_listaComentarios_unComentario_img' alt="" />  <p className='comments_divComments_listaComentarios_unComentario_p'>{comentario}</p></div>)}
      
  </div>;
}
