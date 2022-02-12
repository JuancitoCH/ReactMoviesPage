import React,{useContext} from 'react'
import uniqid from 'uniqid'
import CardMovie from './CardMovie'
import {moviesContext} from '../../context/MoviesContext'


export default function Movies() {
  // movies es la coleccion de pelis en el objeto moviesState
  const {moviesState:{movies}} = useContext(moviesContext)
  return (
      <section className='movies'>
        {movies.map(eachMovie=>{
        return <CardMovie movie={eachMovie} key={uniqid()} />
        })}
      </section>
  )
}
