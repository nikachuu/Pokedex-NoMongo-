import { combineReducers } from "redux";

let pokemonShowing = null;

function pokedex(state = pokemonShowing, action){
  switch(action.type){
    case "SHOW_SPECIFIC":

    case "SHOW_LIST":
      
    default:
      return state;
  };
};

export default pokedex;