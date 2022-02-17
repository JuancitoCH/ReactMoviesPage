import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../css/Header.css";
import "../css/Login.css";

export default function Login() {

    function signUp(event) {
      event.preventDefault();
      const { nombre, apellido ,email, password } = event.target;

      console.log(nombre.value, apellido.value ,email.value, password.value);

      //registro: "https://backendtzuzulcode.wl.r.appspot.com/auth/signup"
      //Datos para el registro: firstName,lastName,birthday,city,email,password
      /* fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email.value,
                password:password.value
            })
        }).then(res=>res.json())
        .then(user=>{
            console.log(user)
            setUser({logged:true,name:user.data.firstName})
        }).catch(error=>setUser({logged:false})) */
    }
  return (
    <div className="Login">
      <Header />
      <section className="Login-Son">
        <h2 className="Login-Title">Registrate</h2>
        <section className="Login-ContForm">
          <form className="Login-Form" onSubmit={signUp}>
            <input className="Login-Input" name="nombre" type="text" placeholder="Nombre" required />
            <input className="Login-Input" name="apellido" type="text" placeholder="Apellido" required />
            <input className="Login-Input" name="email" type="email" placeholder="Email" required />
            <input className="Login-Input" name="password" type="password" placeholder="Contraseña" required />
            <button className="Login-InputBtn">Registrarse</button>
          </form>
        </section>
        <p className="Login-Registrarse">
          ¿No tienes una cuenta? <Link to={"/login"}>Click Aquí</Link>
        </p>
      </section>
    </div>
  );
}
