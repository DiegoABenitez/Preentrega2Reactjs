import { Item } from "../task";
import { Row, Col } from "react-bootstrap";

const ItemList = ({ tasks }) => {
  return (
    <Row>
      {Item.map((Item) => (
        <Col>
          <Task
            name={Item.name}
            description={Item.description}
            id={Item.id}
            categoryId={Item.categoryId}
            onTaskClicked={Item.onTaskClicked}
            textButton={Item.textButton}
          />
        </Col>
      ))}
    </Row>
  );
};

export { ItemList };