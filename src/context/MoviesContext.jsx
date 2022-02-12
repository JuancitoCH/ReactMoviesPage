import React,{createContext, useReducer} from 'react'
import {reducerMovies,movies} from '../reducers/moviesReducer'
import { reducerReviews, reviews } from '../reducers/reviewsReducer'

//creacion del contexto
export const moviesContext = createContext()

export default function MoviesContext({children}){
  const [moviesState,dispatchMovies] = useReducer(reducerMovies,movies)
  const [reviewsState,dispatchReviews] = useReducer(reducerReviews,reviews)

  const addNewMovie=(dataNewMovie)=>{
    
  }
  const addNewReview =(dataNewReview)=>{

  }
  return (
      <moviesContext.Provider value={{moviesState,reviewsState}}>
          {children}
      </moviesContext.Provider>
  )
}
