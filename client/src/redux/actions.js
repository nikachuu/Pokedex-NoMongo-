import axios from "axios";
 
const config = {
  baseURL: "http://localhost:3001/"
};

const api = axios.create(config);


export function showPokemon(pokedexInput) {
  return (dispatch) => {
    api
      .get("/list-of-pokemons/pokedexInput", { params: pokedexInput } )
      .then(response => {
        const foundPokemon = {
          _id: response.data._id,
          name: response.data.name,
          type: response.data.type,
          photo: response.data.photo,
          description: response.data.description
        };
        console.log(foundPokemon);
        dispatch({ type: "SHOW_SPECIFIC", foundPokemon });
      })
  };
};

export function showPokemonList() {
  return (dispatch) => {
    api
      .get("/list-of-pokemons")
      .then(response => {
        const kantoList = response.data.map(pokemon => ({
          _id: pokemon._id,
          name: pokemon.name,
          type: pokemon.type,
          photo: pokemon.photo,
          description: pokemon.description
        }))
        console.log(kantoList);
        dispatch({ type: "SHOW_LIST", kantoList })
      });
    };
};
