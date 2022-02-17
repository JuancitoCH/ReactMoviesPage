import React,{createContext, useEffect, useReducer, useState} from 'react'
import {reducerMovies} from '../reducers/moviesReducer'


//creacion del contexto
export const moviesContext = createContext()

export default function MoviesContext({children}){
  const [actualizar,setActualizar] = useState(1)
  //creacion de los reducers
  
  const [moviesState,dispatchMovies] = useReducer(reducerMovies,{movies:[{Title:"",Poster:"http://franciscoamk.com/wp-content/uploads/2019/11/Rectangulo-1-2.png",Realease:[],Cast:[],Genere:[]}]})
  // const [reviewsState,dispatchReviews] = useReducer(reducerReviews,reviews)

  useEffect(()=>{
    fetch("https://moiviesapi.rj.r.appspot.com/movies")
    .then(data=>data.json())
    .then(moviesApi=>dispatchMovies({type:"armarMovie",payloads:{movies:moviesApi}}))
  },[])
  
  const addNewReview =(dataNewReview,idMovie)=>{
    fetch(`https://moiviesapi.rj.r.appspot.com/movies/${idMovie}/comentar`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      credentials:'include',
      body:JSON.stringify({
        Comentario:{
          Comentario:dataNewReview.Comentario,
          Raiting:dataNewReview.Raiting
        }
      })
    })
    .then(res=>res.json())
    .then(res=>setActualizar(actualizar+1))
}
  
  const contextValues = {
    moviesState,
    dispatchMovies,
    addNewReview,
    actualizar
  }

  return (
      <moviesContext.Provider value={contextValues}>
          {children}
      </moviesContext.Provider>
  )
}

