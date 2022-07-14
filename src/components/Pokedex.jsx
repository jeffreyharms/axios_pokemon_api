import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "nes.css/css/nes.min.css";


export const Pokedex = (props) => {
    const [responseData, setResponseData] = useState([]);
    const [fetched, setFetched] = useState(false);
    

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
            .then(response => {setResponseData(response.data.results)})
    },[fetched]);
    

    return (
        <div class="nes-container is-dark with-title">
            <p class="title">Pokédex</p>
            <button class="nes-btn is-success" onClick={e => setFetched(true)}>Fetch Pokémon</button>
            <ul class="nes-list is-disc">
            {
                fetched?
                responseData.map((item, i) =>
                <li key={i}>{item.name}</li>
                ):
                <li></li>
            }
            </ul>
        </div>
    );
};

export default Pokedex
