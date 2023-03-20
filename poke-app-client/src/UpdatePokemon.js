 import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "./axiosInstance";
import { useNavigate,useParams,Link } from "react-router-dom";

const UpdatePokemon = () => {
  const [pokemon, setPokemon] = useState ({name:'', pokeType:'', attacks:'',image:''})
  //const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  
useEffect (() => {
    axios  
    .get('/api/pokemons/${id}')
    .then((res) => setPokemon(res.data))
    .catch((e) => console.log(e));
        
   }, [id]  );


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('/api/pokemons/${id}', pokemon)
      .then((res) => {
        console.log(res.data);
        navigate(`/user_pokemon/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setError(err.response.data.errors);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPokemon({ ...pokemon, [name]: value });
  };

  return (
    <div className="grid place-items-center h-full">
      <div
        className="bg-no-repeat w-[800px] h-[450px] text-center flex text-[white] shadow-[3px_10px_20px_5px_rgba(0,0,0,0.5)] left-2/4 top-2/4;
    "
      >
        <div className="flex flex-col justify-start space-y-20 items-center w-[45%] px-0 py-[30px] border-r-[2px] border-r-[rgba(30,30,30,0.8)] border-solid bg-[rgba(20,20,20,0.8)]">
          <h2 className="text-3xl font-light pt-[5px]">Ubdate a Pokemon</h2>
          <AiOutlineQuestionCircle size={120} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[70%] transition-[0.2s] px-0 py-[30px] bg-[rgba(170,69,91,0.8)]"
        >
          <h2 className="text-xl font-light">Enter Details</h2>
          <ul className="list-none p-0;">
            <li>
              <input
                onChange={handleChange}
                type="text"
                className="inputFields"
                name="name"
                value={pokemon ? pokemon.name : ''}
                placeholder="Name"
                required
              />
            </li>
            {error.name && (
              <p className="text-red-600 m-0 text-xs text-start">
                {error.name.message}
              </p>
            )}
            <li>
              <input
                onChange={handleChange}
                type="text"
                className="inputFields"
                name="pokeType"
                value={pokemon? pokemon.pokeType: ''}
                placeholder="Type"
                
              />
            </li>
            {error.type && (
              <span className="text-red-600 m-0 text-xs text-start">
                {error.type.message}
              </span>
            )}
            <li>
              <input
                onChange={handleChange}
                type="text"
                className="inputFields"
                name="attacks"
                value={pokemon?pokemon.attacks:''}
                placeholder="Attacks"
                required
              />
            </li>
            {error.attacks && (
              <span className="text-red-600 m-0 text-xs text-start">
                {error.attacks.message}
              </span>
            )}
            <li>
              <input
                onChange={handleChange}
                type="text"
                className="inputFields"
                name="image"
                value={pokemon?pokemon.image:''}
                placeholder="Image URL"
                required
              />
            </li>
            {error.image && (
              <span className="text-red-600 m-0 text-xs text-start">
                {error.image.message}
              </span>
            )}
            <li id="center-btn">
              <input
                type="submit"
                className="border-2 text-lg text-[white] cursor-pointer transition-[0.4s] mt-5 px-[50px] py-2.5 border-solid border-[rgba(170,69,91,1)] hover:px-20 hover:py-2.5 hover:bg-[rgba(20,20,20,0.8)]"
                name="UpdatePokemon"
                value="UpdatePokemon"
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
export default UpdatePokemon; 