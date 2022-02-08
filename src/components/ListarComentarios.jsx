import React from 'react';


export default function ListarComentarios({comentarios}) {

  return <div className='comments__listaComentarios'>
      {comentarios.map(comentario=><div><p key={comentario}>{comentario}</p></div>)}
  </div>;
}
