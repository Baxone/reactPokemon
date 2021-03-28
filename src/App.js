import Pokelist from './components/pokelist/Pokelist';
import PagePoke from './components/pagepoke/PagePoke';
import './App.scss';

import { Route, useLocation } from "wouter";

function App() {
  const [location, setLocation] = useLocation();
  return (
    <div className="App">
      <div className="quarterTriangle1"></div>
      <div className="quarterTriangle2"></div>
      <div className="container">
        <header className="App-header">
          <input type="text" placeholder="Filtrar pokemons por nombre" onInput={event => {
            if (event.target.value !== "") {
              setLocation('/search/' + event.target.value)
            } else {
              setLocation('/')
            }
          }} />
        </header>
        <Route
          component={Pokelist}
          path="/" />
        <Route
          component={PagePoke}
          path="/pokemon/:page" />
        <Route
          component={Pokelist}
          path="/search/:name" />

      </div>
      <div className="quarterCircle1"></div>
      <div className="quarterCircle2"></div>
    </div>

  );
}


export default App;
