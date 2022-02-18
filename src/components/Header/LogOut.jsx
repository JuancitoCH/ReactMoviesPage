import React from 'react';
import '../../css/logout.css';

export default function LogOut () {
    
    function sesionInactiva(){
        window.location.replace("http://localhost:3000/")
        alert("Sesión Inactiva")
    }

    function cerrarSesion(){
    
        fetch("https://moiviesapi.rj.r.appspot.com/user/login",{
                method:"POST",
                credentials:'include',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    Email:"",
                    Password:""
                })
            }).then(res=>res.json())
            .then(user=>{
                if(user.access) return sesionInactiva()
                return alert("Cred Incorrect")
            }).catch(error=>console.log(error)) 
      }

    return(
        <div className="logOut">
            <form className='logOut__Form' onSubmit={cerrarSesion}>
                <button className='LogOut__Button'>Salir</button>
            </form>
        </div>
    )
}