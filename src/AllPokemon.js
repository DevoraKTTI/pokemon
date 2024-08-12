
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function AllPokemon(){

    const [pokemon, setPokemon] = useState([]);  
    const [nextPage, setNextPage] = useState(null)

    useEffect(() => {
        let getPokemon = async () => {
            try {
                const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
                setPokemon(data.results);
                setNextPage(data.next); // Update the nextPage state with the next URL
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        getPokemon();
    }, []);

    let loadMorePokemon = async () => {
        try {
            if (nextPage) {
                const { data } = await axios.get(nextPage);
                console.log('next page data', data);
                setNextPage(data.next);
                setPokemon((prevList) => [...prevList, ...data.results]);
            }
        } catch (err) {
            console.error('Error loading more pokemon', err);
        }
    };

      return (
        <>
            <h1>Pokemon!</h1>
            <div className='container'>
                <div className='row'>
                    {pokemon.map((poke) => {
                        const pokemonId = poke.url.split('/')[6];
                        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
                        console.log('pokemonId',pokemonId);
                        return (
                            <div key={poke.name} className="card col-sm-2 mb-4 mx-3">
                                <Link to={`/pokemon/${pokemonId}`}>
                                    <h3>{poke.name}</h3>
                                    <img src={imageUrl} alt={poke.name} className='card-img-top' />
                                    <div className='card-body'>
                                        <h3 className='card-title text-center'>{poke.name}</h3>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button onClick={() => loadMorePokemon()}>Load More Pokemon</button>
        </>
    );
}


export default AllPokemon