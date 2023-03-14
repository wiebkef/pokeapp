import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokeDetails } from "./PokeDetails";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} />
          <Route path={"/user_pokemon"} />
          <Route path={"/add_pokemon"} />
          <Route path={"/update/:id"} />
        </Routes>
      </BrowserRouter>
      <PokeDetails />
    </div>
  );
}

export default App;
