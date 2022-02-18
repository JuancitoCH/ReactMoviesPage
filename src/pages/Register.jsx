import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../css/Header.css";
import "../css/Login.css";

export default function Login() {

    function signUp(event) {
      event.preventDefault();
      const { userName,email, password } = event.target;

      // console.log(userName.value ,email.value, password.value);

      fetch("https://moiviesapi.rj.r.appspot.com/user/register",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Email:email.value,
                Password:password.value,
                UserName: userName.value,
                UserPhoto:"https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram.png"
            })
        }).then(res=>res.json())
        .then(user=>{
          if(user.valid) return window.location.replace("http://localhost:3000/")
            return alert("Cred Incorrect")
          console.log(user)
          // if(user.succes){window.history.pushState(null,"",)}
            // setUser({logged:true,name:user.data.firstName})
        }).catch(error=>console.log(error)) 
    }
  return (
    <div className="Login">
      <Header />
      <section className="Login-Son">
        <h2 className="Login-Title">Registrate</h2>
        <section className="Login-ContForm">
          <form className="Login-Form" onSubmit={signUp}>
            <input className="Login-Input" name="userName" type="text" placeholder="UserName" required />
            {/* <input className="Login-Input" name="apellido" type="text" placeholder="Apellido" required /> */}
            <input className="Login-Input" name="email" type="email" placeholder="Email" required />
            {/* <input className="Login-Input" name="photoUrl" type="text" placeholder="Url" required /> */}
            <input className="Login-Input" name="password" type="password" placeholder="Contraseña" required />
            <button className="Login-InputBtn">Registrarse</button>
          </form>
        </section>
        <p className="Login-Registrarse">
          ¿Ya tienes una cuenta? <Link to={"/login"}>Click Aquí</Link>
        </p>
      </section>
    </div>
  );
}
