import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList, search}) {

  const searchedPokemon = pokemonList.filter(pokemon => pokemon.name.includes(search))

  const displayedPokemon = searchedPokemon.map(pokemon => {
    return <PokemonCard name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites}
    id={pokemon.id} key={pokemon.id} />
  })
  return (
    <Card.Group itemsPerRow={6}>
      <h1>
        {displayedPokemon}
      </h1>
    </Card.Group>
  );
}

export default PokemonCollection;
