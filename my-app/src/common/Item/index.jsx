import { Card, Button } from "react-bootstrap";
import "./style.scss";

const Item = ({ id, name, description, onItemClicked, textButton }) => {
  return (
    <Card key={name}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={onItemClicked}>
          {textButton}
        </Button>
      </Card.Body>
    </Card>
  );
};

export { Item };