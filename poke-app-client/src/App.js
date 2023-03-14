import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokeDetails } from "./PokeDetails";
function App() {
  return (
    <div className="app">
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
