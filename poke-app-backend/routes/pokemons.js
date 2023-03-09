const express = require("express");
const pokemonsRouter = express.Router();

const {
  getAllPokemons,
  getPokemonById,
  updatePokemon,
  createPokemon,
  deletePokemon,
} = require("../controllers/pokemons");

pokemonsRouter.get("/", getAllPokemons);
pokemonsRouter.put("/:id", updatePokemon);
pokemonsRouter.post("/", createPokemon);
pokemonsRouter.get("/:id", getPokemonById);
pokemonsRouter.delete("/:id", deletePokemon);

module.exports = pokemonsRouter;
