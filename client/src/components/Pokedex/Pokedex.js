import React, { Component } from "react";
import { connect } from "react-redux";
import { showPokemon } from "../../redux/actions";
import PokemonList from "../PokemonList/PokemonList";
import Pokemon from "../Pokemon/Pokemon";
import mainImg from "../../../src/mainimg.jpg";
import InputField from "../InputField/InputField";
import SearchButton from "../SearchButton/SearchButton";
import "../../../src/index.css";

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
        this.state = {
            disabled: true,
            pokemonShowing: []
        };
    };

    handleChangeButton = () => {
        const searchField = this.searchRef.current;

        if ( searchField.hasError() || searchField.value === "" ) {
            this.setState({ disabled: true });
        } else {
            this.setState({ disabled: false });
        };
    };

    sendData = (e) => {
        e.preventDefault();

        const typedData = {
            pokemon: this.searchRef.current.getValue()
        };

        this.props.showPokemon(typedData);
    };

    render(){
        return (
            <section className="pokedex">
                <section className="pokedex--searchwrapper">
                    <form 
                        formEncType="text/plain"
                        name="pokemon"
                        onSubmit={this.sendData}
                        className="pokedex--search">
                        <img src={mainImg}/>
                        <InputField
                            required
                            ref={this.searchRef}
                            onChange={this.handleChangeButton}
                        />
                        <SearchButton value="Buscar pokémon" disabled={this.state.disabled}/>
                    </form>

                    <SearchButton 
                        value="Mostrar tudo"
                        formMethod="GET"
                        formAction="/list-of-pokemons"/>
                    <p>Essa Pokedéx contém os nomes da versão em inglês da franquia.</p>
                </section>
            </section>
        )
    }
}

export default connect(state =>
    ({ pokedex: state.pokedex }),
    { showPokemon }
) (Pokedex);

