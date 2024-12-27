import { useEffect, useState } from "react";
import "./App.css";
import PokemonWaldoPicture from "./Images/LFcompletepg.jpg";
import DropdownMenu from "./components/DropdownMenu";
function App() {
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  const [pokemonSelected, setPokemonSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const backendUrl = "http://localhost:3000/";
  // a quite bit of the code below is merely 'logic'. Therefore, it will need to be
  // moved to backend
  //
  const sampleList = ["charizard", "squirtle", "charmander"];

  const pokemons = [
    {
      name: "Psyduck",
      coordinates: {
        topLeftX: 391,
        topLeftY: 517,
        topRightX: 426,
        topRightY: 520,
        bottomLeftX: 393,
        bottomLeftY: 551,
        bottomRightX: 429,
        bottomRightY: 554,
      },
    },
  ];

  useEffect(() => {}, [clickCoords]);

  function handleMouseClick(e) {
    setClickCoords({ x: e.clientX, y: e.clientY });
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="content">
      <div className="greeting-msg-container">
        <p>Select 3 Pokemon:</p>
        <ul>
          <li>Squirtle</li>
          <li>Sandshrew</li>
          <li>Starmie</li>
        </ul>
      </div>
      {console.log(clickCoords, pokemonSelected)}
      <img
        src={PokemonWaldoPicture}
        alt="Pallet Town filled with a wide range of Pokemons cluttered everywhere"
        width={800}
        onClick={(e) => handleMouseClick(e)}
      />
      <form action={backendUrl} method="POST">
        <button type="submit" onClick={(e) => console.log("btn pressed")}>
          save
        </button>
      </form>
      {showDropdown && (
        <DropdownMenu
          list={sampleList}
          caption={"Which Pokemon is this?"}
          urlToSendTo={backendUrl + "validate"}
          position={clickCoords}
        />
      )}
    </div>
  );
}

export default App;
