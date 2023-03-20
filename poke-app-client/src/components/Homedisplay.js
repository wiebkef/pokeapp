import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from '../axiosInstance';
import InfiniteScroll from 'react-infinite-scroller';

let page = 1;

const fetchData = (setPokemons, pokemons, baseUrl) => {
  axios
    .get(baseUrl)
    .then((res) => {
      setPokemons([...pokemons, ...res.data]);
      console.log(res.data);
      page = page + 1;
    })
    .catch((e) => console.log(e));
};

const useQueryString = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

function Homedisplay({ external }) {
  const [pokemons, setPokemons] = useState([]);
  const queryString = useQueryString();

  console.log(`RRRRR ${queryString.get('query')}`);

  let baseUrl;

  external
    ? (baseUrl = `/api/collection?page=${page}`)
    : (baseUrl = `/api/pokemons?page=${page}&${queryString}`);

  useEffect(() => {
    fetchData(setPokemons, pokemons, baseUrl);
  }, []);

  return (
    <>
      <InfiniteScroll
        pageStart={1}
        loadMore={() => fetchData(setPokemons, pokemons, baseUrl)}
        hasMore={true || false}
        loader={
          <div
            className='loader'
            key={0}>
            Loading ...
          </div>
        }>
        {' '}
        {external ? (
          <h2 className='text-center text-2xl font-bold'>
            Check out new Pokemons
          </h2>
        ) : (
          <h2>Your Pokemon Collection</h2>
        )}
        <div className='flex flex-wrap items-center mt-20 justify-center gap-1 bg-[color:var(--bg-color)]'>
          {pokemons.map((pokemon, index) => {
            let backgroundColor;
            switch (index % 3) {
              case 0:
              case 3:
              case 7:
                backgroundColor = 'bg-teal-600';
                break;
              case 4:
              case 5:
              case 9:
                backgroundColor = 'bg-purple-600';
                break;
              case 2:
              case 6:
                backgroundColor = 'bg-red-600';
                break;
              default:
                backgroundColor = 'bg-blue-600';
                break;
            }
            return (
              <div key={pokemon._id}>
                <Link to={`/pokemons/${pokemon._id}`}>
                  <div
                    className={`flex-shrink-0 m-6 relative overflow-hidden hover:animate-pulse active:animate-spin rounded-lg max-w-xs shadow-lg ${backgroundColor}`}>
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
                          transform:
                            'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
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
                        <span className='block bg-white rounded-full text-purple-500 text-xs w-48 self-auto font-bold px-3 py-2 mt-2 leading-none text-center items-center'>
                          Ability: {pokemon.attacks.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* */}
    </>
  );
}

export default Homedisplay;
