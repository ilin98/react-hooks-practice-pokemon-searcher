import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemonList(data))
  }, [])

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function addNewPokemon(newPokemon) {
    setPokemonList([ newPokemon, ...pokemonList])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search search={search} onHandleChange={handleSearchChange} />
      <br />
      <PokemonCollection pokemonList={pokemonList} search={search} />
    </Container>
  );
}

export default PokemonPage;
