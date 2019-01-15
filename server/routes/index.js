const express = require('express');
const bodyParser = require("body-parser");
const pokemons = require("../database/pokemonlist");

const router = express.Router();

router.get("/list-of-pokemons/pokedexInput", (req, res) => {
  const query = req.query.pokemon
  let foundPokemon = ""
  if ( query.length <= 3 && query != "Mew" ) {
    foundPokemon = findPokemonById(query)
  } else {
    foundPokemon = findPokemonByKeywords(query)
  };
  res.send(foundPokemon)
});

router.get("/list-of-pokemons", (req, res) => res.send(pokemons));

function findPokemonById(id) {
  const foundPokemon = pokemons.find(pokemon => pokemon._id === parseInt(id));

  return foundPokemon;
}

function findPokemonByKeywords(keywords) {

  const foundPokemon = pokemons.find(pokemon => pokemon.keywords.includes(keywords));

  return foundPokemon;
}

module.exports = router;
