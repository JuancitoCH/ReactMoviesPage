import React,{useState} from 'react'
import Header from "../components/Header/Header";
import Movies from '../components/Movies/Movies';
import '../css/MovieList.css'
import CardMovie from '../components/Movies/CardMovie'
import uniqid from 'uniqid'

export default function MoviesList() {
  const listaGeneros=["accion","aventura","ciencia ficcion","comedia","musical","animacion"]
    const [moviesGenere,setMoviesGenere] = useState()
    const moviesFilter=(genero)=>{
        fetch("https://moiviesapi.rj.r.appspot.com/movies/genere/"+genero)
        .then(data=>data.json())
        .then(movies=>setMoviesGenere(movies))
    }
    console.log(window.location.pathname);
  return (
    <div className="MovieList">
      <Header />
      <div className="Home_EspacioBlanco_Header_Slide"></div>
      <main className="MovieList-Main">
        <aside className="MovieList-Aside">
          <h2 className="MoviesList-Aside-Title">Generos</h2>
          {listaGeneros.map((gen) => {
            return (
              <button
                className="MovieList-Aside-Genero"
                value={gen}
                key={uniqid()}
                onClick={() => {
                  moviesFilter(gen);
                }}
              >
                {gen}
              </button>
            );
          })}
        </aside>
        <section
          className={
            moviesGenere ? "MovieList-Section MarginTop " : "MarginTop "
          }
        >
          {moviesGenere ? (<div className='movies margin'>{
            moviesGenere.map((mov) => (
              <CardMovie key={uniqid()} movie={mov} />
            ))}</div>
          ) : (
            <Movies />
          )}
        </section>
      </main>
      {/* Listado de Peliculas */}
      {/* Quizas algun filtro */}
    </div>
  );
}
