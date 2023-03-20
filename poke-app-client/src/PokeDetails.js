import title from "./title.png";
import axios from "./axiosInstance";
import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";

const PokeDetails = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      console.log(response.data);
      setPokemonData(response.data);
    };

    fetchPokemonData();
  }, [id]);

  return (
    <>
      <img className="mx-auto" src={title} alt="" />
      <div className="grid place-items-center h-full">
        <div
          className={`w-full lg:w-2/3 border-2  h-96 rounded-lg grid grid-cols-3`}
        >
          <div id="poke-details" className={`col-span-2 `}>
            <h2 className="text-center text-4xl underline">
              {pokemonData?.name}
            </h2>
            <div className="flex flex-col mt-16">
              <h2 className="text-center text-3xl font-extrabold">Type</h2>
              <h2 className="text-center text-2xl">
                {pokemonData?.types?.[0].type.name}
              </h2>
            </div>
            <div className="flex flex-col mt-16">
              <h2 className="text-center text-3xl font-extrabold">Attacks</h2>
              <h2 className="text-center text-2xl">Flamethrower</h2>
            </div>
          </div>
          <div
            id="poke-img"
            className={`h-full grid place-items-center border-2 `}
          >
            <img
              src={pokemonData?.sprites?.front_default}
              alt=""
              className="h-80"
            />
          </div>
          <Link
        to='/update/:id'
        className='text-white bg-[color:var(--sec-color)] hidden md:flex items-center py-2 px-3 rounded-md hover:opacity-80'>
        Update Pokemon
      </Link>
        </div>
      </div>
    </>
  );
};

export default PokeDetails;
