import React from "react";
import { Card } from "semantic-ui-react";

function PlayerCard({ name, country, searches }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{searches}</span>
        </Card.Meta>
        <Card.Description>{country}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default PlayerCard;
