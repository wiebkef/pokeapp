require("dotenv/config");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const pokemonsRouter = require("./routes/pokemons");
const pokemonsExternalRouter = require("./routes/pokemonsExternal");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/pokemons", pokemonsRouter);
app.use("/api/collection", pokemonsExternalRouter);
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../poke-app-client/build");
  app.use(express.static(buildPath));
  app.get("*", (req, res) => res.sendFile(path.join(buildPath, "index.html")));
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
