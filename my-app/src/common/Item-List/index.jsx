import { Item } from "../Item";
import { Row, Col } from "react-bootstrap";

const ItemList = ({ Item }) => {
  return (
    <Row>
      {Item.map((Item) => (
        <Col>
          <Task
            name={Item.name}
            description={Item.description}
            id={Item.id}
            categoryId={Item.categoryId}
            onItemClicked={Item.onItemClicked}
            textButton={Item.textButton}
          />
        </Col>
      ))}
    </Row>
  );
};

export { ItemList };