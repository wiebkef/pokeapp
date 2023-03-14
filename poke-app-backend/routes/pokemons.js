const express = require("express");
const pokemonsRouter = express.Router();
const pokemonFinder = require("../middlewares/pokemonFinder");
const {
  getAllPokemons,
  getPokemonById,
  updatePokemon,
  createPokemon,
  deletePokemon,
} = require("../controllers/pokemons");

pokemonsRouter.get("/", getAllPokemons);
pokemonsRouter.put("/:id", pokemonFinder, updatePokemon);
pokemonsRouter.post("/", createPokemon);
pokemonsRouter.get("/:id", pokemonFinder, getPokemonById);
pokemonsRouter.delete("/:id", pokemonFinder, deletePokemon);

module.exports = pokemonsRouter;
