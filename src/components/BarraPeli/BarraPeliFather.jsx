import React from 'react'
import BarraPeli from './BarraPeli'
export default function BarraPeliFather({movie:movies}) {
  return (
    <div>
        {
            movies.map((movie)=><BarraPeli key={movie.id} img={movie.poster} titulo={movie.title} description={movie.description}/>)
        }
        
    </div>
  )
}
