import title from './title.png';
import axios from './axiosInstance';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PokeDetails = ({ userPokemons, setUserPokemons }) => {
  const [pokemonData, setPokemonData] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonData = async () => {
      // Checks if the 'id' is a MongoDB ObjectId
      const isUserPokemon = /^[0-9a-fA-F]{24}$/.test(id);

      if (isUserPokemon) {
        try {
          const res = await axios.get(`/api/pokemons/${id}`);
          setPokemonData(res.data);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.log('User Pokémon not found');
          } else {
            console.log('An error occurred while fetching the Pokémon');
          }
        }
      } else {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          console.log(response.data);
          setPokemonData(response.data);
        } catch (error) {
          console.error('Error fetching Pokemon data:', error);
        }
      }
    };

    fetchPokemonData();
  }, [id, userPokemons]);
  const deleteUserPokemon = () => {
    setUserPokemons(userPokemons.filter((poke) => poke.id !== pokemonData.id));
    navigate('/');
  };

  const getType = () => {
    if (pokemonData?.types?.[0]?.type?.name) {
      return pokemonData.types[0].type.name;
    } else if (pokemonData?.pokeType) {
      return pokemonData.pokeType;
    }
    return '';
  };

  const borderColorClass =
    getType() === 'water'
      ? 'border-[#6390F0]'
      : getType() === 'fire'
      ? 'border-[#EE8130]'
      : getType() === 'electric'
      ? 'border-[#F7D02C]'
      : getType() === 'grass'
      ? 'border-[#7AC74C]'
      : getType() === 'rock'
      ? 'border-[#B6A136]'
      : getType() === 'poison'
      ? 'border-[#A33EA1]'
      : getType() === 'psychic'
      ? 'border-[#F95587]'
      : getType() === 'bug'
      ? 'border-[#A6B91A]'
      : getType() === 'flying'
      ? 'border-[#A98FF3]'
      : getType() === 'ice'
      ? 'border-[#96D9D6]'
      : getType() === 'fighting'
      ? 'border-[#C22E28]'
      : getType() === 'ground'
      ? 'border-[#E2BF65]'
      : getType() === 'dragon'
      ? 'border-[#6F35FC]'
      : getType() === 'ghost'
      ? 'border-[#735797]'
      : getType() === 'steel'
      ? 'border-[#B7B7CE]'
      : getType() === 'fairy'
      ? 'border-[#D685AD]'
      : getType() === 'dark'
      ? 'border-[#705746]'
      : getType() === 'normal'
      ? 'border-[#A8A77A]'
      : '';

  const backgroundColorClass =
    getType() === 'water'
      ? 'bg-[#6390F0]'
      : getType() === 'fire'
      ? 'bg-[#EE8130]'
      : getType() === 'electric'
      ? 'bg-[#F7D02C]'
      : getType() === 'grass'
      ? 'bg-[#7AC74C]'
      : getType() === 'rock'
      ? 'bg-[#B6A136]'
      : getType() === 'poison'
      ? 'bg-[#A33EA1]'
      : getType() === 'psychic'
      ? 'bg-[#F95587]'
      : getType() === 'bug'
      ? 'bg-[#A6B91A]'
      : getType() === 'flying'
      ? 'bg-[#A98FF3]'
      : getType() === 'ice'
      ? 'bg-[#96D9D6]'
      : getType() === 'fighting'
      ? 'bg-[#C22E28]'
      : getType() === 'ground'
      ? 'bg-[#E2BF65]'
      : getType() === 'dragon'
      ? 'bg-[#6F35FC]'
      : getType() === 'ghost'
      ? 'bg-[#735797]'
      : getType() === 'steel'
      ? 'bg-[#B7B7CE]'
      : getType() === 'fairy'
      ? 'bg-[#D685AD]'
      : getType() === 'dark'
      ? 'bg-[#705746]'
      : getType() === 'normal'
      ? 'border-[#A8A77A]'
      : '';

  return (
    <>
      <img
        className='mx-auto'
        src={title}
        alt=''
      />
      <div className='grid place-items-center h-full'>
        <div
          className={`w-full lg:w-2/3 border-2  h-96 rounded-lg grid grid-cols-3 ${borderColorClass}`}>
          <div
            id='poke-details'
            className={`col-span-2 ${backgroundColorClass}`}>
            <h2 className='text-center text-4xl underline'>
              {pokemonData?.name}
            </h2>
            <div className='flex flex-col mt-16'>
              <h2 className='text-center text-3xl font-extrabold'>Type</h2>
              <h2 className='text-center text-2xl'>
                {pokemonData?.types?.[0]?.type?.name || pokemonData?.pokeType}
              </h2>
            </div>
            <div className='flex flex-col mt-16'>
              <h2 className='text-center text-3xl font-extrabold'>Attacks</h2>
              <h2 className='text-center text-2xl'>
                {pokemonData?.abilities?.[0]?.ability?.name ||
                  pokemonData?.attacks}
              </h2>
            </div>
          </div>
          <div
            id='poke-img'
            className={`h-full grid place-items-center border-2 ${borderColorClass}`}>
            <img
              src={
                pokemonData?.sprites?.other['official-artwork'].front_default ||
                pokemonData?.image
              }
              alt=''
              className='h-60 motion-safe:animate-bounce'
            />
          </div>
        </div>
        {pokemonData?.userAdded && (
          <button
            className='bg-red-500 text-white px-4 py-2 rounded mt-4'
            onClick={deleteUserPokemon}>
            Delete
          </button>
        )}
      </div>
    </>
  );
};

export default PokeDetails;
