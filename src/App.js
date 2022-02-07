import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import './css/general.css'
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}></Route>
        {/* <Route/>
        <Route/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
