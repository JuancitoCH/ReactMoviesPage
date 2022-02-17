import React from 'react'
import '../../css/Slide.css'

export default function img(movies) {
  return (
        <img src={movies.movie.Banner} alt={movies.movie.Title} className="Slide-Img" />
  );
}
