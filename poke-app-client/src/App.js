import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddPokemon from "./AddPokemon";
import Homedisplay from "./components/Homedisplay";
import PokeDetails from "./PokeDetails";
import UpdatePokemon from "./UpdatePokemon";

function App() {
  const [userPokemons, setUserPokemons] = useState([]);
  const addUserPokemon = (pokemon) => {
    setUserPokemons([...userPokemons, pokemon]);
  };

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Home />
              <Homedisplay external={true} />
            </>
          }
        />
        <Route
          path={"/user_pokemon/"}
          element={<Homedisplay external={false} />}
        />
        <Route
          path={"/add_pokemon"}
          element={<AddPokemon addUserPokemon={addUserPokemon} />}
        />
        <Route path={"/update/:id"} element={<UpdatePokemon/> } />

        <Route
          path={"/pokemons/:id"}
          element={
            <PokeDetails
              userPokemons={userPokemons}
              setUserPokemons={setUserPokemons}
            />
          }
        />

        <Route path={"/search"} element={<Homedisplay external={false} />} />

      </Routes>
    </div>
  );
}

export default App;
