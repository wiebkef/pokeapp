import React from "react";
import Pokemon from "../assets/pokemon.png";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="object-contain h-50 w-50" src={Pokemon} alt="/" />
      <Typed
        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
        strings={["Catch them All"]}
        typeSpeed={120}
        backSpeed={140}
        loop
      />
    </div>
  );
}

export default Hero;
