import React from 'react';


export default function ListarComentarios({comentarios}) {

  return <div className='comments_divComments_listaComentarios'>
      {comentarios.map(comentario=><div className='comments_divComments_listaComentarios_unComentario' key={comentario}><img src="/UserProfileSvg.svg" className='comments_divComments_listaComentarios_unComentario_img' alt="" />  <p className='comments_divComments_listaComentarios_unComentario_p'>{comentario}</p></div>)}
  </div>;
}
