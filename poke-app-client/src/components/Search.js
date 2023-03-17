import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("HHHHHH");
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="border-b-2 border-[color:var(--sec-color)] flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]"
      >
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Pokes"
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
