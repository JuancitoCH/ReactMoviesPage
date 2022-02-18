import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import MoviesList from './pages/MoviesList'
import NotFound from './pages/NotFound'
import './css/app.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/movieslist' element={<MoviesList/>}/>
        <Route path='*' element={<NotFound/>}/>
        {/* <Route path='/filtrar' element={<Filtros/>}/> */}

      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
