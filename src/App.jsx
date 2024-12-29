import { useEffect, useState } from "react";
import "./App.css";
import PokemonWaldoPicture from "./Images/LFcompletepg.jpg";
import DropdownMenu from "./components/DropdownMenu";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  const [pokemonSelected, setPokemonSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const backendUrl = "http://localhost:3000/";

  useEffect(() => {
    axios(backendUrl + "pokemons").then((response) =>
      setPokemons(response.data),
    );
  }, []);

  function handleMouseClick(e) {
    setClickCoords({ x: e.clientX, y: e.clientY });
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="content">
      <div className="greeting-msg-container">
        <p>Select these 3 Pokemon in the picture:</p>
        <ul className="pokemons-container">
          {pokemons.map((pk) => (
            <li key={pk.id} className="pokemon-item">
              <img src={pk.sprite} alt={`${pk.name}'s picture`} width="100" />
              {pk.name}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={PokemonWaldoPicture}
        alt="Pallet Town filled with a wide range of Pokemons cluttered everywhere"
        width={800}
        onClick={(e) => handleMouseClick(e)}
      />
      {showDropdown && (
        <DropdownMenu
          list={pokemons}
          caption={"Which Pokemon is this?"}
          urlToSendTo={backendUrl + "validate"}
          position={clickCoords}
        />
      )}
    </div>
  );
}

export default App;
