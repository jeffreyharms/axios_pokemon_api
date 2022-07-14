import React, { useState } from 'react'
import "nes.css/css/nes.min.css";

const PokemonForm = (props) => {
    const [pokemonName, setPokemonName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if(pokemonName.length === 0) {
            return;
        }
        props.onNewName(pokemonName)
    }

    return (
        <div class="nes-container is-dark with-title">
            <p class="title">Search for Pokémon</p>
            <form onSubmit={handleSubmit}>
                <div class="nes-field is-inline">
                    <label for="inline_field">Search</label>
                    <input type="text" class="nes-input is-success" id="inline_field" placeholder="Pokémon name" name="pokemonName" value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
                </div>
                <button type="submit" class="nes-btn is-primary">Search Pokémon</button>
            </form>
        </div>
    )
}

export default PokemonForm