import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosInstance";
import "../App.css";
import InfiniteScroll from "react-infinite-scroller";

let page = 1;

const fetchData = (setPokemons, pokemons, baseUrl) => {
  axios
    .get(baseUrl)
    .then((res) => {
      setPokemons([...pokemons, ...res.data]);
      console.log(res.data);
      page = page + 1;
    })
    .catch((e) => console.log(e));
};

const refresh = (setPokemons) => {};

function Homedisplay({ external }) {
  const [pokemons, setPokemons] = useState([]);

  let baseUrl;
  external
    ? (baseUrl = `/api/collection?page=${page}`)
    : (baseUrl = `/api/pokemons?page=${page}`);

  useEffect(() => {
    fetchData(setPokemons, pokemons, baseUrl);
  }, []);

  return (
    <>
      <InfiniteScroll
        pageStart={1}
        loadMore={() => fetchData(setPokemons, pokemons, baseUrl)}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {" "}
        {external ? (
          <h2 className="text-center text-2xl font-bold">
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
      </InfiniteScroll>
      {/* */}
    </>
  );
}

export default Homedisplay;
