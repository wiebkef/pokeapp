const Pokemon = require("../models/pokemon");
const ErrorResponse = require("../utils/errorResponse");

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
const getPokemonById = async (req, res, next) => {
  res.json(req.reqPokemon);
};

// TODO: updatePokemon
const updatePokemon = async (req, res, next) => {
  try {
    // const deletedPokemon = await Pokemon.findByIdAndUpdate(req.params.id);
    const updatedPokemon = await Pokemon.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log("**&@&#@#&@#", updatedPokemon);
    res.json(updatedPokemon);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

// TODO: createPokemon
const createPokemon = async (req, res, next) => {
  try {
    const newPokemon = await Pokemon.create(req.body);
    res.status(201).json(newPokemon);
  } catch (error) {
    next(new ErrorResponse(error));
  }
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
