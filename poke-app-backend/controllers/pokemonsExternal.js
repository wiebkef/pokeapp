const axios = require("axios");

const getAllExternalPokemons = async (req, res) => {
  const limit = 3;
  let pokemons = [];

  for (let elem = 1; elem < limit; elem++) {
    axios
      .get(`//pokeapi.co/api/v2/pokemon/${elem}`)
      .then((response) => {
        const pokemonObject = {
          name: response.data.name,
          pokeType: response.data.types[0].type.name,
          image: response.data.sprites.other["official-artwork"].front_default,
          attacks: [
            response.data.moves[0].move.name,
            response.data.moves[1].move.name,
            response.data.moves[2].move.name,
          ],
        };
        pokemons.push(pokemonObject);
        //console.log(pokemons);
      })
      .catch((err) => console.log(err))
      .finally((res) => {
        console.log("mmmmm", pokemons);
      });
  }
  console.log("grrrr", pokemons);
  res.json(pokemons);
};

module.exports = {
  getAllExternalPokemons,
};
