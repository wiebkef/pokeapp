import React from "react";
import Pokemon from "../assets/pokemon.png";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="object-contain h-50 w-50" src={Pokemon} alt="/" />
    </div>
  );
}

export default Hero;
