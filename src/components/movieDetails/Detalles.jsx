import React from 'react';
import '../../css/detalles.css'
export default function Detalles({ movie, raiting }) {
/*   useEffect(()=>{
    year.substr(0,4);
    },[movie.Realease])
  const ArrayRelease = "Hola-Soy-Un-Array".split("-"); */
  function Raiting() {
    let promedio = 0;
    raiting.map((objt) => (promedio += objt.Raiting));
    //console.log(promedio)
    const promediofloat = promedio / raiting.length; //Saco promedio Decimal
    promedio = Math.floor(promedio / raiting.length); //Saco promedio Entero
    switch (promedio) {
      case 1:
        return `🔅(${promediofloat.toFixed(2)})`;
      case 2:
        return `🔅🔅(${promediofloat.toFixed(2)})`;
      case 3:
        return `🔅🔅🔅(${promediofloat.toFixed(2)})`;
      case 4:
        return `🔅🔅🔅🔅(${promediofloat.toFixed(2)})`;
      case 5:
        return `🔅🔅🔅🔅🔅(${promediofloat.toFixed(2)})`;
      default:
        return `🔅(0)`;
    }
  }
  
  return (
    <div className="principal">
      <div className="contenedor">
        {" "}
        {/*Toda la clase contenedor está en modo inline-block*/}
        <div className="imagen">
          <img className="imagen__img" alt={movie.Title} src={movie.Poster} />
        </div>
        <header className="titulo">
          <h2 className="titulo__nombre">{movie.Title + ` ( 2021 )`}</h2>
        </header>
        <div className="ranking">
          <span className="detalles__estrellitas">{Raiting()}</span>
        </div>
        <div className="descripcion">
          <p className="descripcion__p">{movie.Sinopsis}</p>
        </div>
        <div className="participantes">
          <p className="participantes__p">Género: {movie.Genere}</p>
          <p className="participantes__p">Actores: {movie.Cast}</p>
        </div>
      </div>
      {/*Este div de abajo sirve para separar los detalles del trailer*/}
      <div className="espacio"></div>
    </div>
  );
}
