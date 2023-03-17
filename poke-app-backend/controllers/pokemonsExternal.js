const getAllExternalPokemons = async (req, res) => {
  const { page = 1, docsPerPage = 6 } = req.query;
  console.log(req.query);
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const urls = [];
  for (
    let elem = (page - 1) * docsPerPage + 1;
    elem <= page * docsPerPage;
    elem++
  ) {
    urls.push(`${baseUrl}${elem}`);
    //console.log(`${baseUrl}${elem}`);
  }

  try {
    const rawPokemons = await Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json()))
    );
    const pokemons = rawPokemons.map((rawPokemon) => {
      // console.log(rawPokemon);

      return {
        name: rawPokemon.name,
        pokeType: rawPokemon.types[0].type.name,
        image: rawPokemon.sprites.other["official-artwork"].front_default,
        attacks: [
          rawPokemon.moves[0].move.name,
          rawPokemon.moves[1].move.name,
          rawPokemon.moves[2].move.name,
        ],
        _id: rawPokemon.id,
      };
    });
    res.json(pokemons);
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = {
  getAllExternalPokemons,
};
