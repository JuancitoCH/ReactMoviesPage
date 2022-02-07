import React from 'react';


export default function ListarComentarios({comentarios}) {
    
  return <div className='comments__listaComentarios'>
      {comentarios.map(comentario=><p key={comentario}>{comentario}</p>)}
  </div>;
}
