import React, { Component } from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "../../redux/store";
import Pokemon from "../Pokemon/Pokemon"
import "./PokemonList.css";

class PokemonList extends Component {

  render() {
    return (
      <div>
        { this.props.children !== null &&
        <section className="pokemon--data">
        
          <Pokemon>
            
              <img src={this.props.photo}/>
              <p>{this.props._id}</p>
              <p>{this.props.name}</p>
              <p>{this.props.type}</p>
              <p>{this.props.description}</p>
            
          </Pokemon>
        
        </section>
        }
      </div>
    );
  }
};

function mapStateToProps(state) {
  console.log(state.pokedex)
  return (state.pokedex)
}

export default connect(
  mapStateToProps)
  (PokemonList);