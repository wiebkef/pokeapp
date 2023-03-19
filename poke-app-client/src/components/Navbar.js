import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { TbDetails } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import Search from './Search';

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center mx-5 mt-3'>
      {/* left side */}
      <div className='flex items-center'>
        <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer'>
          <AiOutlineMenu
            className='text-[color:var(--sec-color)]'
            size={25}
          />
        </div>
        <h1 className='text-[color:var(--sec-color)] font-bold text-2 px-2 lg:text-3xl md:text-2xl'>
          POKE
          <span className='font-light'> WORLD</span>
        </h1>
      </div>

      <Search />

      <div className='flex-row flex justify-around gap-3'>
        <NavLink
          className='text-white bg-[color:var(--sec-color)] items-center rounded-md hover:opacity-80 px-2 py-1'
          to='/'>
          Home
        </NavLink>
        <NavLink
          to='/user_pokemon'
          className='text-white bg-[color:var(--sec-color)] items-center rounded-md hover:opacity-80 px-2 py-1'>
          User Pokey
        </NavLink>
        <NavLink
          to='/add_pokemon'
          className='text-white bg-[color:var(--sec-color)] items-center rounded-md hover:opacity-80 px-2 py-1'>
          Add Pokey
        </NavLink>
      </div>

      {/* mobile menu */}
      {/* Overlay */}
      {nav && (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      )}

      {/* side menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-[color:var(--sec-color)] z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-[color:var(--sec-color)] z-10 duration-300'
        }>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-white font-bold text-2xl sm:text-3xl lg:text-4xl px-2'>
          POKE
          <span className='font-light'> WORLD</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4'>
            <li className='text-white text-xl py-4 flex'>
              <TbDetails
                size={25}
                className='mr-4'
              />
              Poke Details
            </li>
            <li className='text-white text-xl py-4 flex'>
              <MdFavorite
                size={25}
                className='mr-4'
              />
              My Favorites
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
