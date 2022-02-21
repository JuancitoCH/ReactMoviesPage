import React,{useRef} from 'react'
import '../../css/Header.css'
import { BiCameraMovie } from 'react-icons/bi';
import {moviesContext} from '../../context/MoviesContext'
// import {useHistory} from 'react-router-dom'
// BiCameraMovie
import {Link} from 'react-router-dom'
import LogOut from './LogOut';
import { useContext } from 'react';

export default function Header() {
  
  const barra = useRef()
  const {moviesState:{movies}} = useContext(moviesContext)
  console.log(movies)
  const buscar=()=>{
    console.log(barra.current.value)
    movies.forEach(movie => {
      let titulo = movie.Title.toLowerCase()
      let input = barra.current.value.toLowerCase()
      if(titulo.indexOf(input)!==-1){
        console.log(movie)
      }
    });
  }

  return (
    <div className="Header dark" id='Header'>
      {/* <img src="/peliculaIcono.svg" className='Header_Logo' alt="LogoHeader" /> */}
      <Link to={"/"} className="Header_Logo">
        <BiCameraMovie className="Header_Logo_img"/>
      </Link>

      <div className="Header_divBotonBusqueda">
        <input type="text" ref={barra} className="Header_divBotonBusqueda_barraBusqueda" />
        <button className="Header_divBotonBusqueda_button" onClick={buscar}>
          <img
            src="/lupaicon.svg"
            className="Header_divBotonBusqueda_button_img"
            alt=""
          />
        </button>
      <Link className="filtrarLink"to="/movieslist">Filtrar</Link>
      </div>
      
      <div className="Header_botones_div">
        <Link to={"/login"}>
          <button className="Header_LoginButton">Login</button>
        </Link>
        <Link to={"/register"}>
          <button className="Header_RegisterButton">Register</button>
        </Link>
        <LogOut></LogOut>
      </div>

      {/* <div className="Header_EspacioBlanco"></div> */}
      {/* <button style={display:none;}></button> */}
    </div>
  );
}
