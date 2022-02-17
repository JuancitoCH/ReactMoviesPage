import React from 'react'
import '../../css/Header.css'
import { BiCameraMovie } from 'react-icons/bi';
// import {useHistory} from 'react-router-dom'
// BiCameraMovie
import {Link} from 'react-router-dom'
export default function Header() {

  return (
    <div className='Header dark'>
        <div className='Header_botones_div'>
        <Link to={'/login'}>
          <button className='Header_LoginButton'>Login</button>
        </Link>
        <Link to={'/register'}>
          <button className='Header_RegisterButton'>Register</button>
        </Link>
        </div>
        {/* <img src="/peliculaIcono.svg" className='Header_Logo' alt="LogoHeader" /> */}
        
        <BiCameraMovie className='Header_Logo' />
        <div className='Header_divBotonBusqueda'>
            <input type="text" className='Header_divBotonBusqueda_barraBusqueda'/>
            <button className='Header_divBotonBusqueda_button'><img src="/lupaicon.svg" className='Header_divBotonBusqueda_button_img' alt="" /></button>
        </div>
        <div className='Header_EspacioBlanco'></div>
       {/* <button style={display:none;}></button> */}
    </div>
  )
}
