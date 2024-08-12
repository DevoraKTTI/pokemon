import AllPokemon from './AllPokemon';
import './AppRoute.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePokemon from './SinglePokemon';

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllPokemon />} />
        <Route path='/pokemon/:id' element={<SinglePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;