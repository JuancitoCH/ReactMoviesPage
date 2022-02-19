import React from 'react';
import '../../css/detalles.css'
export default function Detalles({ movie, raiting }) {
/*   let moviecopy = [...movie.Release];
  console.log(moviecopy.slice(0,4)); 
  Añadir bien esta funcionalidad
  */


  function Raiting() {
    let promedio = 0;
    raiting.map((objt) => (promedio += objt.Raiting));
    
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
  //Implementar => Mandar el promedi obtenido y cambiarlo el de la api.
  return (
    <div className="principal">
      <div className="contenedor">
        {" "}
        {/*Toda la clase contenedor está en modo inline-block*/}
        <div className="imagen">
          <img className="imagen__img" alt={movie.Title} src={movie.Poster} />
        </div>
        <header className="titulo">
          <h2 className="titulo__nombre">{movie.Title + " (" + 2021 + ")"}</h2>
        </header>
        <div className="ranking">
          <span className="detalles__estrellitas">{Raiting()}</span>
        </div>
        <div className="descripcion">
          <p className="descripcion__p">{movie.Sinopsis}</p>
        </div>
        <div className="participantes">
          {console.log(movie.Genere)}
          <p className="participantes__p">Género: {movie.Genere ? movie.Genere.map(gener=>gener+", "):"movie.Genere"}</p>
          <p className="participantes__p">Actores: {movie.Cast ? movie.Cast.map(gener=>gener+", "):"movie.Genere"}</p>
        </div>
      </div>
      {/*Este div de abajo sirve para separar los detalles del trailer*/}
      <div className="espacio"></div>
    </div>
  );
}
