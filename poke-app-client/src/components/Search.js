import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('HHHHHH');
  };

  return (
    <div className='flex-1 sm:w-3/4 lg:w-full'>
      <form
        onSubmit={handleSearch}
        className='border-b-2 border-[color:var(--sec-color)] flex items-center w-3/4 sm:w-3/4 lg:w-3/4'>
        <AiOutlineSearch size={20} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search Pokeys'
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
