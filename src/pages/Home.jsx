import React from 'react';
import '../css/home.css'
import Movies from '../components/Movies/Movies'
import Slide from '../components/Slide/Slide';
import BarraPeliFather from '../components/BarraPeli/BarraPeliFather';
import Header from '../components/Header/Header';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Header />
      {/* <div className='Home_EspacioBlanco_Header_Slide'></div> */}
      <Slide />
      <Movies />
      <Link to={"/movieslist"} className="CenterBlock">
        <button className="Movies-BtnMoreMovies" > Más Películas </button>
      </Link>
      <BarraPeliFather />
    </div>
  );
}
