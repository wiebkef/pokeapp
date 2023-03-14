import Charmander from "./Charmander.png";
import title from "./title.png";

export const PokeDetails = () => {
  return (
    <>
      <img className="mx-auto" src={title} alt="" />
      <div className="grid place-items-center h-full">
        <div className="w-full lg:w-2/3 border-2 border-[#F09953] h-96 rounded-lg grid grid-cols-3">
          <div id="poke-details" className="col-span-2 bg-[#F09953]">
            <h2 className="text-center text-4xl underline">Charmander</h2>
            <div className="flex flex-col mt-16">
              <h2 className="text-center text-3xl font-extrabold">Type</h2>
              <h2 className="text-center text-2xl">Fire</h2>
            </div>
            <div className="flex flex-col mt-16">
              <h2 className="text-center text-3xl font-extrabold">Attacks</h2>
              <h2 className="text-center text-2xl">Flamethrower</h2>
            </div>
          </div>
          <div
            id="poke-img"
            className="h-full grid place-items-center border-2 border-[#F09953]"
          >
            <img src={Charmander} alt="" className="h-80" />
          </div>
        </div>
      </div>
    </>
  );
};
