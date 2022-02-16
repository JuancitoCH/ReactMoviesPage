import React from 'react';
import '../css/home.css'
import Movies from '../components/Movies/Movies'
import Slide from '../components/Slide/Slide';
import BarraPeliFather from '../components/BarraPeli/BarraPeliFather';

export default function Home() {
  return <div className="home">
      <div className='Home_EspacioBlanco_Header_Slide'></div>
      <Slide/>
      <Movies/>
      <BarraPeliFather/>
  </div>;
}
