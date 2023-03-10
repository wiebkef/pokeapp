import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { TbDetails } from 'react-icons/tb';

function Navbar() {

const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl px-2'>POKE 
                <span className='font-light'> WORLD</span>
            </h1>
        </div> 

        {/* search pokes */}  
        <div className='border-b-2 border-[color:var(--sec-color)] flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search Pokes'/>
        </div>

        {/* favorites */}
        <button className='bg-[color:var(--sec-color)] hidden md:flex items-center py-2 rounded-md'>
            <MdFavorite size={20} className='mr-2'/>Favorites
        </button>

        {/* details */}
        <button className='bg-[color:var(--sec-color)] hidden md:flex items-center py-2 rounded-md'>
            <TbDetails size={20} className='mr-2'/>Details
        </button>

        {/* mobile menu */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        {/* side menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-[color:var(--sec-color)] z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-[color:var(--sec-color)] z-10 duration-300'}>
            <AiOutlineClose 
            onClick={() => setNav(!nav)}
            size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl px-2'>POKE 
                <span className='font-light'> WORLD</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4'>
                    <li className='text-xl py-4 flex'><TbDetails size={25} className='mr-4'/>Poke Details</li>
                    <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/>My Favorites</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar