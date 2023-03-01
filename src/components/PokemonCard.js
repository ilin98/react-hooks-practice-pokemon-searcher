import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
  const [front, setFront] = useState(true)

  function handleSpriteClick(){
    setFront(!front)
  }

  return (
    <Card onClick={handleSpriteClick}>
      <div>
        <div className="image">
          {front ? <img src={sprites.front} alt={name} /> :
          <img src={sprites.back} alt={name} />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
