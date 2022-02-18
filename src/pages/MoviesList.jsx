import React,{useState} from 'react'
import Header from "../components/Header/Header";
import Movies from '../components/Movies/Movies';
import '../css/MovieList.css'
import CardMovie from '../components/Movies/CardMovie'
import uniqid from 'uniqid'

export default function MoviesList() {
  const listaGeneros=["accion","aventura","ciencia ficcion","comedia","musical"]
    const [moviesGenere,setMoviesGenere] = useState()
    const moviesFilter=(genero)=>{
        fetch("https://moiviesapi.rj.r.appspot.com/movies/genere/"+genero)
        .then(data=>data.json())
        .then(movies=>setMoviesGenere(movies))
    }
    console.log(window.location.pathname);
  return (
    <div>
      <Header />
      <div className="Home_EspacioBlanco_Header_Slide"></div>
      <div className='listaGeneros MarginTop'>
            <h1>Generos</h1>
        {listaGeneros.map(gen=>{
            return <button className='cadaGenero' value={gen} key={uniqid()} onClick={()=>{moviesFilter(gen)}}>{gen}</button>
        })}
        </div>
      <section className={moviesGenere?"listaPeliculas MarginTop MarginLeft":"MarginTop MarginLeft"}>
        {moviesGenere ? 
        moviesGenere.map(mov=><CardMovie key={uniqid()} movie={mov}/>)
        :<Movies />}
      </section>
      {/* Listado de Peliculas */}
      {/* Quizas algun filtro */}
    </div>
  );
}
