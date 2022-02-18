import React from 'react'
import '../../css/Header.css'
import { BiCameraMovie } from 'react-icons/bi';
// import {useHistory} from 'react-router-dom'
// BiCameraMovie
import {Link} from 'react-router-dom'
export default function Header() {

  return (
    <div className="Header dark" id='Header'>
      {/* <img src="/peliculaIcono.svg" className='Header_Logo' alt="LogoHeader" /> */}
      <Link to={"/"} className="Header_Logo">
        <BiCameraMovie className="Header_Logo_img"/>
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
      <Link className="filtrarLink"to="/movieslist">Filtrar</Link>
      </div>

      <div className="Header_botones_div">
        <Link to={"/login"}>
          <button className="Header_LoginButton">Login</button>
        </Link>
        <Link to={"/register"}>
          <button className="Header_RegisterButton">Register</button>
        </Link>
      </div>

      {/* <div className="Header_EspacioBlanco"></div> */}
      {/* <button style={display:none;}></button> */}
    </div>
  );
}
