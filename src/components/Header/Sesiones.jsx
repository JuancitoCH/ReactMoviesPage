import React from 'react';
import LogOut from './LogOut';
import { Link } from 'react-router-dom';

export default function Sesiones(prop) {

    function elegirBotones(estadoSesion) {
        if (estadoSesion) {
            return (
                <>
                <Link to={"/login"}>
                <button className="Header_LoginButton">Login</button>
                </Link>
                <Link to={"/register"}>
                <button className="Header_RegisterButton">Register</button>
                </Link>
                </>
            )
        }
        else {
            return (
                <>
                    <LogOut></LogOut>
                </>
            )
        }
    }

    return (
        <div className="Header_botones_div">
            {elegirBotones(prop)}
        </div>
     )
          

}