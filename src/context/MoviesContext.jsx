import React,{createContext, useEffect, useReducer} from 'react'
import {reducerMovies,movies} from '../reducers/moviesReducer'
import { reducerReviews, reviews } from '../reducers/reviewsReducer'

//creacion del contexto
export const moviesContext = createContext()

export default function MoviesContext({children}){
  //creacion de los reducers
  const [moviesState,dispatchMovies] = useReducer(reducerMovies,movies)
  const [reviewsState,dispatchReviews] = useReducer(reducerReviews,reviews)
  
  useEffect(()=>{
    fetch("https://moiviesapi.rj.r.appspot.com/movies")
    .then(data=>data.json())
    .then(moviesApi=>dispatchMovies({payloads:{movies:moviesApi}}))
  },[])
  
  
  // async function traerMovies(){
  //   let moviesApi = await fetch("https://moiviesapi.rj.r.appspot.com/movies")
  //   moviesApi=  await moviesApi.json()
  //   dispatchMovies({payloads:{movies:moviesApi}})
  // }



  const addNewReview =(dataNewReview)=>{
    dispatchReviews(dataNewReview)
  }
  

  const addNewMovie=(dataNewMovie)=>{
    
  }


  const getMovieById= async (idMovie)=>{

    const data =await fetch("https://moiviesapi.rj.r.appspot.com/movies/"+idMovie)
    let movieDetails = await data.json()
    movieDetails = movieDetails.Movie

    console.log(movieDetails)
    
    return movieDetails
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



// useEffect( ()=>{
  //   fetch("https://moiviesapi.rj.r.appspot.com/movies")
  //   .then(data=>{return data.json()})
  //   .then(Movies=>{
  //     return dispatchMovies({payloads:{Movies}})
  //     console.log(Movies)
  //     console.log(moviesState)
  //   })
  // },[])





  // const addNewReview =(dataNewReview)=>{
  //   // Si uzo esta funcion fuera del reducer perfe
  //   // dentro no perfe

  //   // const {newReview} = dataNewReview.payloads
  //   // let newState = {...reviewsState}
  //   // const {reviews} = newState
  //   // reviews.map(ear =>{ 
  //   //     if(ear.idMovie===dataNewReview.payloads.idMovie)
  //   //     {
  //   //         ear.comentarios.push(newReview)
  //   //     }
  //   //     return ear
  //   // })
  //   // newState = {reviews:reviews}

  //   // dispatchReviews({type:"addReview",newState})
  //   dispatchReviews(dataNewReview)
  // }