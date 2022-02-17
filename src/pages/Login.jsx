import React from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header/Header'
import '../css/Header.css'
import '../css/Login.css'
export default function Login() {
    function signIn(event){
        event.preventDefault()
        const {email,password} = event.target

        // console.log(email.value,password.value)

        //registro: "https://backendtzuzulcode.wl.r.appspot.com/auth/signup"
        //Datos para el registro: firstName,lastName,birthday,city,email,password
        fetch("https://moiviesapi.rj.r.appspot.com/user/login",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Email:email.value,
                Password:password.value
            })
        }).then(res=>res.json())
        .then(user=>{
            console.log(user)
            
            // if(user.access) return <Link to="/" />
            // setUser({logged:true,name:user.data.firstName})
        }).catch(error=>console.log(error)) 
        // }).catch(error=>setUser({logged:false})) 
    }
  return (
    <div className='Login'>
        <Header/>
        <section className='Login-Son'>
            <h2 className='Login-Title'>Iniciar sesión</h2>
            <section className='Login-ContForm'>
                <form className='Login-Form' onSubmit={signIn}>
                    <input className='Login-Input' name='email' type="email" placeholder='Email' required />
                    <input className='Login-Input' name='password' type="password" placeholder='Contraseña' required />
                    <button className='Login-InputBtn'>Iniciar</button>
                </form>
            </section>
            <p className='Login-Registrarse'>¿No Tienes una cuenta? <Link to={'/register'}>Click Aquí</Link> </p>
        </section>
    </div>
  )
}
