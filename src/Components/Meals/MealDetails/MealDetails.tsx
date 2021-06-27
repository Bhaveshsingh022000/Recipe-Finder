import React from "react";
import { Container, Row , Col} from "react-bootstrap";
import { MealThumbnail } from "../Api/MealsApiCall";

type MealDetailsProps = {
  details: MealThumbnail;
};

const MealDetails: React.FC<MealDetailsProps> = (props) => {
  return (
    <Container>
      <Row>
        <Col>
            <img src={props.details.imageUrl} alt={props.details.title} />
        </Col>
      </Row>
    </Container>
  );
};

export default MealDetails;
