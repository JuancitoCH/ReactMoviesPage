import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import MoviesList from './pages/MoviesList';
import Footer from './components/Footer/Footer';
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
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
