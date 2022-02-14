import React,{createContext, useEffect, useReducer} from 'react'
import {reducerMovies,movies} from '../reducers/moviesReducer'
import { reducerReviews, reviews } from '../reducers/reviewsReducer'

//creacion del contexto
export const moviesContext = createContext()

export default function MoviesContext({children}){
  //creacion de los reducers
  const [moviesState,dispatchMovies] = useReducer(reducerMovies,movies)
  const [reviewsState,dispatchReviews] = useReducer(reducerReviews,reviews)
  
  useEffect( ()=>{
    fetch("https://moiviesapi.rj.r.appspot.com/movies")
    .then(data=>{return data.json()})
    .then(Movies=>{
      return dispatchMovies({payloads:{Movies}})
      console.log(Movies)
      console.log(moviesState)
    })
  },[])

  const addNewMovie=(dataNewMovie)=>{
    
  }
  const addNewReview =(dataNewReview)=>{
    // Si uzo esta funcion fuera del reducer perfe
    // dentro no perfe

    // const {newReview} = dataNewReview.payloads
    // let newState = {...reviewsState}
    // const {reviews} = newState
    // reviews.map(ear =>{ 
    //     if(ear.idMovie===dataNewReview.payloads.idMovie)
    //     {
    //         ear.comentarios.push(newReview)
    //     }
    //     return ear
    // })
    // newState = {reviews:reviews}

    // dispatchReviews({type:"addReview",newState})
    dispatchReviews(dataNewReview)
  }
  const getMovieById= async (idMovie)=>{
    let movie = await fetch("https://moiviesapi.rj.r.appspot.com/movies/"+idMovie)
    movie = await movie.json()
    movie = movie.Movie
    // console.log(movie)
    return movie
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
