import React from 'react'
import '../../css/Header.css'
import { BiCameraMovie } from 'react-icons/bi';
// BiCameraMovie
export default function Header() {
  return (
    <div className='Header dark'>
        <div className='Header_botones_div'>
        <button className='Header_LoginButton'>Login</button>
        <button className='Header_RegisterButton'>Register</button>
        </div>
        {/* <img src="/peliculaIcono.svg" className='Header_Logo' alt="LogoHeader" /> */}
        <BiCameraMovie className='Header_Logo'/>
        <div className='Header_divBotonBusqueda'>
            <input type="text" className='Header_divBotonBusqueda_barraBusqueda'/>
            <button className='Header_divBotonBusqueda_button'><img src="/lupaicon.svg" className='Header_divBotonBusqueda_button_img' alt="" /></button>
        </div>
        <div className='Header_EspacioBlanco'></div>
       {/* <button style={display:none;}></button> */}
    </div>
  )
}
