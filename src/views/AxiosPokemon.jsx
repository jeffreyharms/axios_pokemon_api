import React, { useState } from 'react'
import DisplayOnLoad from '../components/DisplayOnLoad'
import PokemonForm from '../components/PokemonForm'
import "nes.css/css/nes.min.css";
import Pokedex from '../components/Pokedex';

const AxiosPokemon = () => {
    const [pokemonName, setPokemonName] = useState("mareep")

    const receivePokemonName = newName => {
        setPokemonName(newName);
    }

    return (
        <div class="nes-container is-dark with-title">
            <PokemonForm onNewName = {receivePokemonName} />
            <DisplayOnLoad pokemonName = {pokemonName} />
            <Pokedex />
        </div>
    )
}

export default AxiosPokemon