import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function PlayerCard({ name, country, searches }) {
  return (
    <Card>
      {/* <Image src="/images/avatar/large/matthew.png" wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{searches}</span>
        </Card.Meta>
        <Card.Description>{country}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
}

export default PlayerCard;
