import { useEffect, useState } from "react";
import "./App.css";
import PokemonWaldoPicture from "./Images/LFcompletepg.jpg";
import DropdownMenu from "./components/DropdownMenu";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  const [showDropdown, setShowDropdown] = useState(false);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [time, setTime] = useState(new Date());

  const backendUrl = "http://localhost:3000/";

  useEffect(() => {
    axios(backendUrl + "pokemons").then((response) =>
      setPokemons(response.data),
    );
    const intervalId = setInterval(() => {
      setTime(new Date());
    });

    return () => clearInterval(intervalId);
  }, []);

  function handleMouseClick(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickCoords({ x, y });
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="content">
      <div className="greeting-msg-container">
        {correctCounter < 3 ? (
          <div>
            <p>Find these 3 Pokemon in the picture below: </p>
            <ul className="pokemons-container">
              {pokemons.map((pk) => (
                <li key={pk.id} className="pokemon-item">
                  <img
                    src={pk.sprite}
                    alt={`${pk.name}'s picture`}
                    width="100"
                  />
                  {pk.name}
                </li>
              ))}
            </ul>
            {"Correct: " + correctCounter}
          </div>
        ) : (
          "Game Over"
        )}
      </div>
      <img
        src={PokemonWaldoPicture}
        alt="Pallet Town filled with a wide range of Pokemons cluttered everywhere"
        width={800}
        height={600}
        style={{ objectFit: "contain" }}
        onClick={(e) => handleMouseClick(e)}
      />
      {showDropdown && (
        <DropdownMenu
          list={pokemons}
          setList={setPokemons}
          caption={"Which Pokemon is this?"}
          urlToSendTo={backendUrl + "validate"}
          position={clickCoords}
          setShowDropdown={setShowDropdown}
          correctCounter={correctCounter}
          setCorrectCounter={setCorrectCounter}
        />
      )}
    </div>
  );
}

export default App;
