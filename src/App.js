import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer/Footer';
import MoviesList from './pages/MoviesList'
import Register from './pages/Register';
import NotFound from './pages/NotFound'
import Login from './pages/Login';
import Home from './pages/Home';
import CreatMovie from './pages/CreatMovie';
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
        <Route path='/admin' element={<CreatMovie/>}/>
        <Route path='*' element={<NotFound/>}/>
        {/* <Route path='/filtrar' element={<Filtros/>}/> */}

      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
