const express = require('express');
const bodyParser = require("body-parser");
const pokemons = require("../database/pokemonlist");

const router = express.Router();

const jsonParser = bodyParser.json()
router.get("/list-of-pokemons", (req, res) => res.send(pokemons));

router.get("/list-of-pokemons/pokemon", jsonParser, (req, res) => {
  const input = req.body.pokedexInput
  // const foundPokemon = pokemons.find(
  //   pokemon => {
  //     input <= 3 ? pokemon === ( input === pokemons._id ) : pokemon === (input === pokemons.keywords)
  //   }
  // )

  // if ( !foundPokemon ) {
  //   return res.status(404).send('Pokémon não encontrado');
  // };
  console.log("esse é o req.body: ", req.body)
  res.send(`o req.body.pokedexInput é ${input}`);
});

module.exports = router;
