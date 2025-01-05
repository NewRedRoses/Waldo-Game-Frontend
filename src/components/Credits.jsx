import Navbar from "./Navbar";

export default function Credits() {
  return (
    <>
      <div className="content">
        <Navbar />

        <h1>About</h1>
        <p>
          This is a simple "Where's Waldo" style game but with Pokemons. The
          main purprose of this project is to practice backend and front-end
          communication.
        </p>
        <h2>Credits</h2>
        <p>
          Obviously, I do not own the copyright for the images used. All these
          pictures belong to Nintendo/Pokemon company.{" "}
        </p>
        <p>
          <b>Created by Mark A. </b>
        </p>
      </div>
    </>
  );
}
