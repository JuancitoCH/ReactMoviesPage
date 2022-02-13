import React,{useRef,useContext} from 'react'
// import { reviews } from '../../reducers/reviewsReducer'
import ListarComentarios from '../Comments/ListarComentarios'
import { moviesContext } from '../../context/MoviesContext'


export default function Comentar({idMovie}) {
    const {dispatchReviews} = useContext(moviesContext)
    const inpReview = useRef()
    const add =()=>{

    }
  return (
    <div className='comments dark'>
    <input type="text" ref={inpReview} />
    <button onClick={()=>{
        dispatchReviews(
          {type:"addReview",payloads:{idMovie,newReview:inpReview.current.value}}
          )}}
        >Agregar</button>
    <ListarComentarios idMovie={idMovie}/>
    </div>
  )
}
