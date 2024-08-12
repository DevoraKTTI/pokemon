import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {AllPokemon} from './AllPokemon';
import {SinglePokemon} from './SinglePokemon';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllPokemon />} />
        <Route path='/pokemon/:Id' element={<SinglePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

