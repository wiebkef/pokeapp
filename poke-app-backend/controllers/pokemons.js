const Pokemon = require("../models/pokemon");
const ErrorResponse = require("../utils/errorResponse");

const getAllPokemons = async (req, res) => {
  const { page = 1, docsPerPage = 6 } = req.query;

  try {
    const pokemons = await Pokemon.find()
      .sort({ updatedAt: "desc" })
      .limit(docsPerPage)
      .skip((page - 1) * docsPerPage);

    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPokemonById = async (req, res, next) => {
  console.log(req.reqPokemon);
  res.json(req.reqPokemon);
};

const updatePokemon = async (req, res, next) => {
  try {
    const updatedPokemon = await Pokemon.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(updatedPokemon);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const createPokemon = async (req, res, next) => {
  try {
    const newPokemon = await Pokemon.create(req.body);
    res.status(201).json(newPokemon);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const deletePokemon = async (req, res, next) => {
  console.log("createPokemon is not implemented yet");
  try {
    const deletedPokemon = await Pokemon.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(deletedPokemon);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

module.exports = {
  getAllPokemons,
  getPokemonById,
  updatePokemon,
  createPokemon,
  deletePokemon,
};
