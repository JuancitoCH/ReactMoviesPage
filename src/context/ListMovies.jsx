import React,{createContext,useReducer} from 'react';
import {ComentariosReducer,mokup} from '../reducers/ComentariosReducer';
export const listMovies = createContext()


export default function ListMovies({children}) {
 const [movies,dispach]= useReducer(ComentariosReducer,mokup)
  const addReview=(action)=>{
      dispach(action)
  }
  return <listMovies.Provider value={{movies,addReview}}>
      {children}
  </listMovies.Provider>;
}