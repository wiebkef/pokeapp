import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddPokemon from "./AddPokemon";
import Homedisplay from "./components/Homedisplay";
import PokeDetails from "./PokeDetails";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Home />
              <Homedisplay />
            </>
          }
        />
        <Route path={"/user_pokemon/"} />
        <Route path={"/add_pokemon"} element={<AddPokemon />} />
        <Route path={"/update/:id"} />
        <Route path={"/pokemons/:id"} element={<PokeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
