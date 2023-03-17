import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddPokemon from "./AddPokemon";
import Homedisplay from "./components/Homedisplay";
import PokeDetails from "./PokeDetails";

function App() {
  return (
    <div className="app">
      <p>hello world</p>
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
        <Route path={"/add_pokemon"} element={<AddPokemon />} />
        <Route path={"/update/:id"} />
        <Route path={"/pokemons/:id"} element={<PokeDetails />} />
        <Route path={"/search"} element={<Homedisplay />} />
      </Routes>
    </div>
  );
}

export default App;
