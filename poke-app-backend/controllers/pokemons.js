const Pokemon = require("../models/pokemon");

// TODO: sort by created date & add pagination
const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// TODO: getPokemonById
const getPokemonById = async (req, res) => {
  console.log("getPokemonById is not implemented yet");
};

// TODO: updatePokemon
const updatePokemon = async (req, res) => {
  console.log("updatePokemon is not implemented yet");
};

// TODO: createPokemon
const createPokemon = async (req, res) => {
  console.log("createPokemon is not implemented yet");
};

// TODO: deletePokemon
const deletePokemon = async (req, res) => {
  console.log("createPokemon is not implemented yet");
};

module.exports = {
  getAllPokemons,
  getPokemonById,
  updatePokemon,
  createPokemon,
  deletePokemon,
};
