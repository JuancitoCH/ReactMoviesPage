import React,{createContext, useReducer} from 'react'
import {reducerMovies,movies} from '../reducers/moviesReducer'
import { reducerReviews, reviews } from '../reducers/reviewsReducer'

//creacion del contexto
export const moviesContext = createContext()

export default function MoviesContext({children}){
  //creacion de los reducers
  const [moviesState,dispatchMovies] = useReducer(reducerMovies,movies)
  const [reviewsState,dispatchReviews] = useReducer(reducerReviews,reviews)

  const addNewMovie=(dataNewMovie)=>{
    
  }
  const addNewReview =(dataNewReview)=>{
    dispatchReviews(dataNewReview)
  }
  const getMovieById=(idMovie)=>{
    const movieToReturn = moviesState.movies.filter(eachMovie=> eachMovie.id === idMovie )
    
    return movieToReturn[0]
  }
  const getReviewsById=(idMovie)=>{
    const reviewToReturn = reviewsState.reviews.filter(eachReview=> eachReview.idMovie === idMovie)[0]
    // console.log(reviewToReturn)
    return reviewToReturn.comentarios
  }
  const contextValues = {
    moviesState,
    reviewsState,
    getMovieById,
    getReviewsById,
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
