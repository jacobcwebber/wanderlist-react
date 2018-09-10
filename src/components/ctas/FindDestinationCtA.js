import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

const FindDestinationCtA = () => (
  <div>
    <Card centered>
      <Card.Content textAlign="center">
        <Card.Header>Find a destination</Card.Header>
        <Link to="/destinations/search">
          <Icon name="plus circle" size="massive" />
        </Link>
      </Card.Content>
    </Card>
  </div>
);

export default FindDestinationCtA;
