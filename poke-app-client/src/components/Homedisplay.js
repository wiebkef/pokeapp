import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosInstance";
import "../App.css";

function Homedisplay() {
  console.log();
  const [pokemons, setPokemons] = useState([]);
  const { _id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/pokemons/`)
      .then((res) => setPokemons(res.data))
      .catch((e) => console.log(e));
  }, [_id]);

  return (
    <>
      <div className="grid-container">
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon._id}>
              <figure className="card rounded-t-lg border border-solid border-orange-700 bg-yellow-200 hover:animate-pulse">
                <img src={pokemon.image} alt="pokecard" />
                <figcaption>{pokemon.name}</figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Homedisplay;
