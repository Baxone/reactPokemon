import Pokelist from './components/pokelist/Pokelist';
import './App.scss';

import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <input type="text" placeholder="Filtrar pokemons por nombre" />
        </header>
        <Route
          component={Pokelist}
          path="/" />
        <Route
          component={Pokelist}
          path="/:page" />
      </div>
    </div>
  );
}

export default App;
