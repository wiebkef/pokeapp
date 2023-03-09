const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    pokeType: { type: String, required: [true, "Type is required"] },
    attacks: {
      type: [String],
      required: [true, "At least one attack is required"],
    },
    image: { type: String, required: [true, "Image is required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
