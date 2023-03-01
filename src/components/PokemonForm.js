import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    }
  })

function onHandleFormSubmit(e) {
  e.preventDefault()
  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon)
  })
  .then(resp => resp.json())
  .then(newPokemon => {
    addNewPokemon(newPokemon)
    setNewPokemon({
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: "",
      }
    })
  })
}

function handleChange(e) {
  setNewPokemon({
    ...newPokemon,
    [e.target.name]: [e.target.value]
  })
}

function handleOtherChange(e){
  setNewPokemon({
    ...newPokemon,
    sprites: {
      [e.target.name]: [e.target.value]
    }
  })
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onHandleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemon.name} onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPokemon.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={newPokemon.sprites.front}
            onChange={handleOtherChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={newPokemon.sprites.back}
            onChange={handleOtherChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
