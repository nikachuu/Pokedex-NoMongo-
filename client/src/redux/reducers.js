import { combineReducers } from "redux";

let pokemonShowing = null;

function pokedex(state = pokemonShowing, action){
  switch(action.type){
    case "SHOW_SPECIFIC":
      console.log(action.foundPokemon, "show specific")
      return action.foundPokemon;
    case "SHOW_LIST":
      console.log(state)
      const pokeList = action.map(pokemon => [{
        photo: pokemon.photo,
        number: pokemon.number,
        type: pokemon.type,
        description: pokemon.description
      }]);
      console.log(pokeList);
      return pokeList;
    default:
      return state;
  };
};

const reducers = combineReducers({ pokedex })
export default reducers;