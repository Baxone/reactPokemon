
import React from 'react';
import Pokelist from './components/pokelist/Pokelist';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <input type="text" placeholder="Filtrar pokemons por nombre" />
        </header>
        <Pokelist />
      </div>
    </div>
  );
}

export default App;
