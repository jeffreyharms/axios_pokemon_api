import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "nes.css/css/nes.min.css";


const DisplayOnLoad = (props) => {
    const {pokemonName} = props
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
    axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(
            res => {
                console.log(res.data)
                setPokemon(res.data)})
        .catch(err => console.log(err))
    }, [pokemonName])

        return (
            <div class="nes-container is-dark with-title">
                {
                    pokemon?
                    <div class="nes-container is-dark with-title">
                        <p class="title">{pokemon.name}</p>
                        <img class="pokeSprites" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>:
                        <div class="nes-container is-dark with-title">
                            <p class="title">.....Loading.....</p>
                            <i class="nes-ash"></i>
                    </div>
                }
            </div>
        )
}

export default DisplayOnLoad