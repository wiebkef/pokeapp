import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosInstance";
import "../App.css";

function Homedisplay({ external }) {
  let baseUrl;
  external ? (baseUrl = "/api/collection") : (baseUrl = "/api/pokemons");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setPokemons(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {external ? (
        <h2 className="text-center text-2xl text-bold">
          Check out new Pokemons
        </h2>
      ) : (
        <h2>Your Pokemon Collection</h2>
      )}
      <div className="grid-container">
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon._id}>
              <Link to={`/pokemons/${pokemon._id}`}>
                <figure className="card rounded-t-lg border border-solid border-orange-700 bg-yellow-200 hover:animate-pulse">
                  <img src={pokemon.image} alt="pokecard" />
                  <figcaption>{pokemon.name}</figcaption>
                </figure>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Homedisplay;
