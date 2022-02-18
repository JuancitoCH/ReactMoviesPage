import React from 'react'
import '../../css/Header.css'
import { BiCameraMovie } from 'react-icons/bi';
// import {useHistory} from 'react-router-dom'
// BiCameraMovie
import { Link } from 'react-router-dom'
import Sesiones from './Sesiones'


export default function Header() {

  let estadoSesion = false;

  return (
    <div className="Header dark" id='Header'>
      {/* <img src="/peliculaIcono.svg" className='Header_Logo' alt="LogoHeader" /> */}
      <Link to={"/"} className="Header_Logo">
        <BiCameraMovie className="Header_Logo_img" />
      </Link>

      <div className="Header_divBotonBusqueda">
        <input type="text" className="Header_divBotonBusqueda_barraBusqueda" />
        <button className="Header_divBotonBusqueda_button">
          <img
            src="/lupaicon.svg"
            className="Header_divBotonBusqueda_button_img"
            alt=""
          />
        </button>
        <Link className="filtrarLink" to="/movieslist">Filtrar</Link>
      </div>

      <div className="Header_botones_div">
        <Sesiones estado={estadoSesion}></Sesiones>
      </div>

      {/* <div className="Header_EspacioBlanco"></div> */}
      {/* <button style={display:none;}></button> */}
    </div>
  );
}
