import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";

function SinglePokemon() {
  const [pokemonDetails, setPokemonDetails]= useState(null);
  const { id } = useParams();

    useEffect(()=>{
      const fetchSingleDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
          // `https://pokeapi.co/api/v2/pokemon/9/`
        );

          setPokemonDetails(data);
          console.log('results', data);
      
      } catch (err) {
        console. log('Error fetching single pokemon data', err);
        console.error(err);
      }
    }
    fetchSingleDetails();
  },[id]);

  // console.log("pokemon details:",pokemonDetails);
  return (
    <div>
        
        <h2>Single pokemon</h2>
        {pokemonDetails ? 
        (
            <div>
            <h3>{pokemonDetails.name}</h3>
            <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
            />
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
            <p>Base Experience: {pokemonDetails.base_experience}</p>
            <p>Abilities</p>
            {pokemonDetails.abilities.map((ability) =>
                ability.name).join(', ')}
            </div>
        )
        :
        (
            <p>adding</p>
        )
        }    
    </div>

    );
  }
export default SinglePokemon