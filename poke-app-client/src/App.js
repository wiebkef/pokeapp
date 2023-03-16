import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

import Navbar from "./components/Navbar";
import { AddPokemon } from "./AddPokemon";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/user_pokemon"} />
        <Route path={"/add_pokemon"} element={<AddPokemon />} />
        <Route path={"/update/:id"} />
      </Routes>
    </div>
  );
}

export default App;
