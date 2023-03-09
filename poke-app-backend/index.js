require("dotenv/config");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const app = express();
const pokemonsRouter = require("./routes/pokemons");

app.use(cors());
app.use(express.json());
app.use("/api/pokemons", pokemonsRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
