import React,{createContext, useEffect, useReducer} from 'react'
import {reducerMovies,movies} from '../reducers/moviesReducer'
import { reducerReviews, reviews } from '../reducers/reviewsReducer'

//creacion del contexto
export const moviesContext = createContext()

export default function MoviesContext({children}){
  //creacion de los reducers
  const [moviesState,dispatchMovies] = useReducer(reducerMovies,{movies:[{Title:"",Poster:"http://franciscoamk.com/wp-content/uploads/2019/11/Rectangulo-1-2.png"}]})
  const [reviewsState,dispatchReviews] = useReducer(reducerReviews,reviews)
  
  useEffect(()=>{
    fetch("https://moiviesapi.rj.r.appspot.com/movies")
    .then(data=>data.json())
    .then(moviesApi=>dispatchMovies({payloads:{movies:moviesApi}}))
  },[])
  
  const addNewReview =(dataNewReview)=>{
    dispatchReviews(dataNewReview)
  }
  
  const addNewMovie=(dataNewMovie)=>{
    
  }

  

  const contextValues = {
    moviesState,
    reviewsState,
    dispatchMovies,
    dispatchReviews,
    addNewReview
  }



  return (
      <moviesContext.Provider value={contextValues}>
          {children}
      </moviesContext.Provider>
  )
}

