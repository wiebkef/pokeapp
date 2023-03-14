const express = require("express");
const pokemonsExternalRouter = express.Router();
const { getAllExternalPokemons } = require("../controllers/pokemonsExternal");

pokemonsExternalRouter.get("/", getAllExternalPokemons);

module.exports = pokemonsExternalRouter;
