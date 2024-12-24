import { useEffect, useState } from "react";
import "./App.css";
import PokemonWaldoPicture from "./Images/LFcompletepg.jpg";

function App() {
  const [count, setCount] = useState(0);

  function mouseClick(event) {
    console.log(event.clientX, event.clientY);
  }
  return (
    <>
      <p>
        Select 3 Pokemon: <i>Squirtle</i>, <i>Sandshrew</i> and <i>Starmie</i>
      </p>
      <img
        src={PokemonWaldoPicture}
        alt="Pallet Town filled with a wide range of Pokemons cluttered everywhere"
        width={800}
        onClick={(e) => mouseClick(e)}
      />
    </>
  );
}

export default App;
