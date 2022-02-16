import React from 'react';
import Movies from '../components/Movies/Movies'
import Slide from '../components/Slide/Slide';
import Header from '../components/Header/Header';
import '../css/home.css'

export default function Home() {
  return <div className="home">
      <Header/>
      <div className='Home_EspacioBlanco_Header_Slide'></div>
      <Slide/>
      <Movies/>
      
  </div>;
}
