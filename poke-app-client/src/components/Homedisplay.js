import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axiosInstance';

function Homedisplay() {
  console.log();
  const [pokemons, setPokemons] = useState([]);
  const { _id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/pokemons/`)
      .then((res) => setPokemons(res.data))
      .catch((e) => console.log(e));
  }, [_id]);

  return (
    <>
      <div className='flex flex-wrap items-center mt-20 justify-center gap-1 bg-[color:var(--bg-color)]'>
        {pokemons.map((pokemon, index) => {
          let backgroundColor;
          switch (index % 4) {
            case 0:
            case 3:
            case 7:
              backgroundColor = 'bg-teal-600';
              break;
            case 1:
            case 5:
            case 9:
              backgroundColor = 'bg-purple-600';
              break;
            case 2:
            case 6:
              backgroundColor = 'bg-red-600';
              break;
            default:
              backgroundColor = '';
              break;
          }
          return (
            <div key={pokemon._id}>
              <div
                className={`flex-shrink-0 m-6 relative overflow-hidden hover:animate-pulse active:animate-bounce rounded-lg max-w-xs shadow-lg ${backgroundColor}`}>
                <svg
                  className='absolute bottom-0 left-0 mb-8'
                  viewBox='0 0 375 283'
                  fill='none'
                  style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                  <rect
                    x='159.52'
                    y='175'
                    width='152'
                    height='152'
                    rx='8'
                    transform='rotate(-45 159.52 175)'
                    fill='white'
                  />
                  <rect
                    y='107.48'
                    width='152'
                    height='152'
                    rx='8'
                    transform='rotate(-45 0 107.48)'
                    fill='white'
                  />
                </svg>
                <div className='relative pt-5 px-5 flex items-center justify-center'>
                  <div
                    className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
                    style={{
                      background: 'radial-gradient(black, transparent 60%)',
                      transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                      opacity: 0.2,
                    }}></div>
                  <img
                    className='relative w-40'
                    src={pokemon.image}
                    alt='pokecard'></img>
                </div>
                <div className='relative text-white px-6 pb-6 mt-6'>
                  <span className='block opacity-75 -mb-1 text-center'>
                    {pokemon.pokeType}
                  </span>
                  <div className='flex-col justify-between items-center'>
                    <span className='block font-semibold text-xl self-auto text-center'>
                      {pokemon.name}
                    </span>
                    <span className='block bg-white rounded-full text-purple-500 text-xs self-auto font-bold px-3 py-2 mt-2 leading-none items-center'>
                      Ability: {pokemon.attacks.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <figure className='card rounded-t-lg border border-solid border-orange-700 bg-yellow-200 hover:animate-pulse'>
  <img
    src={pokemon.image}
    alt='pokecard'
  />
  <figcaption>{pokemon.name}</figcaption>
</figure>; */}
    </>
  );
}

export default Homedisplay;
