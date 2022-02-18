import React,{useContext,useRef} from 'react';
import {moviesContext} from '../../context/MoviesContext'
import ListarComentarios from './ListarComentarios';
import '../../css/comments.css'



export default function Comments({idMovie,Comentarios}) {
    const {addNewReview} = useContext(moviesContext)
    const inputComentario = useRef(null)
    const selectComentario = useRef(null)
  return (
    <div className="comments dark">
      <h2 className="Title-H2">Comentarios</h2>
      <div className="comments_divComments">
        <div className="comments_divComments_team">
          <img
            src="/UserProfileSvg.svg"
            className="comments_divComments_img"
            alt=""
          />
          <input
            ref={inputComentario}
            type="text"
            className="comments_divComments_input"
            placeholder="Deja un comentario"
          ></input>
          <select className='comments-select' name="selectComentario" ref={selectComentario}>
            <option className='comments-select-option' value="1">🔅</option>
            <option className='comments-select-option' value="2">🔅🔅</option>
            <option className='comments-select-option' value="3">🔅🔅🔅</option>
            <option className='comments-select-option' value="4">🔅🔅🔅🔅</option>
            <option className='comments-select-option' value="5">🔅🔅🔅🔅🔅</option>
          </select>
        </div>
        <div className="comments_espacioBlanco"></div>
        <button
          onClick={() => {
            console.log(selectComentario.current.value);
            addNewReview(
              {
                Comentario: inputComentario.current.value,
                Raiting: selectComentario.current.value,
              },
              idMovie
            );
            inputComentario.current.value = "";
          }}
          className="comments_divComments_button"
        >
          Comentar
        </button>
      </div>
      {<ListarComentarios idMovie={idMovie} Comentarios={Comentarios} />}
    </div>
  );
}
