import React from "react";
import { Card } from "semantic-ui-react";

function PlayerCard({ name, country, searches }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header data-testid="name">{name}</Card.Header>
        <Card.Meta>
          <span className="date" data-testid="search-amount">
            {searches}
          </span>
        </Card.Meta>
        <Card.Description data-testid="country">{country}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default PlayerCard;
