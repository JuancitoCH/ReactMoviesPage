import React from 'react'
import Header from "../components/Header/Header";
import Movies from '../components/Movies/Movies';
import '../css/MovieList.css'
export default function MoviesList() {
    console.log(window.location.pathname);
  return (
    <div>
      <Header />
      <div className="Home_EspacioBlanco_Header_Slide"></div>
      <section className="MarginTop">
        <Movies />
      </section>
      {/* Listado de Peliculas */}
      {/* Quizas algun filtro */}
    </div>
  );
}
