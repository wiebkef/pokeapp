import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate, createSearchParams } from "react-router-dom";

const Search = () => {
  const [searchWord, setSearchWord] = useState();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("HHHHHH");
    navigate(
      {
        pathname: "/search",
        search: `?${createSearchParams("query")}${searchWord}`,
      } /* `/search?query=${search}` */
    );
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
          placeholder="Search your album"
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
