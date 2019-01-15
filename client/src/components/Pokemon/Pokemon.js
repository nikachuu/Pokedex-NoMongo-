import React, { Component } from "react";
import { connect } from "react-redux";
import "./Pokemon.css"
import { showPokemon } from "../../redux/actions";


class Pokemon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="card">
                {this.props.children}
            </div>
        );
    }
}


export default (Pokemon);

// export default Pokemon;

/* modelo do props
<div class="card">
    <img src="https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"/>
    <p>1</p>
    <p>Bulbasaur</p>
    <p>Grass, Poison</p>
    <p>Bulbasaur is a dualtype Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32. Along with Charmander and Squirtle, Bulbasaur is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.</p>
</div>
*/