import axios from "axios";
 /*nao faco ideia se ta certo...*/
 
const config = {
  baseURL: "http://localhost:3001/"
};

const api = axios.create(config);


export function sendSearchData(input) {
  return (
    api.
      post("/", { params: { input }})
  )
}
export function showPokemon(pokedexInput) {
  return (dispatch) => {
    api
      .get("/list-of-pokemons/pokemon", { params: { pokedexInput } })
      .then(response => {
        console.log(response)
        dispatch({ type: "SHOW_SPECIFIC", pokedexInput })
      })
  };
};

export function showPokemonList(data) {
  return (dispatch) => {
    api
      .get("/list-of-pokemons/")
      .then(response => {
        console.log(response, "estou vindo do front end");
        dispatch({ type: "SHOW_LIST", data })
      });
    };
};

function getDataFromBackEnd(response){
  let pokemonShowing = {
    number: response.data._id,
    name: response.data.name,
    photo: response.data.photo,
    description: response.data.description
  };
  return pokemonShowing;
};