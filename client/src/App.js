import React, { Component } from 'react';
import Pokedex from "./components/Pokedex/Pokedex";
import PokemonList from "./components/PokemonList/PokemonList";
import './App.css';

class App extends Component {
  render(){
    return (
        <div className="app">
            <Pokedex/>
            <PokemonList/>
        </div>
    )
}
}

export default App;
