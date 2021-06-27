import React, { useState, useEffect, Suspense } from "react";
// import SearchBar from "../SearchBar/SearchBar";
import { Row, Container, Col, Card } from "react-bootstrap";
import { fetchMeals, MealThumbnail } from "./Api/MealsApiCall";
import Styled from "styled-components";
import MealDetails from "./MealDetails/MealDetails";

const OtherComponent = React.lazy(() => import("../SearchBar/SearchBar"));

const MealsGridView = () => {
  const [searchText, setSearchText] = useState("");
  const [gridData, setGridData] = useState<MealThumbnail[]>([]);
  const [selectedMealId, setSelectedMealId] = useState("-1");

  useEffect(() => {
    fetchMeals("soup")
      .then((value) => {
        setGridData(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSearchMeal = () => {
    fetchMeals(searchText).then((value) => {
      setGridData(value);
    });
  };

  if (selectedMealId !== "-1") {
    return (
      <MealDetails
        details={
          gridData.find((item) => item.id === selectedMealId) || gridData[0]
        }
      />
    );
  }

  return (
    <Container>
      <Row>
        <Suspense fallback={"Loading..."}>
          <OtherComponent
            onSearchMeal={onSearchMeal}
            onSearchTextChange={(text) => setSearchText(text)}
          />
        </Suspense>
      </Row>
      <Row>
        {gridData.map((item) => (
          <StyledCol key={item.id} sm={4} xs={12} md={3}>
            <Card
              onClick={() => setSelectedMealId(item.id)}
              style={{ width: "100%" }}
            >
              <Card.Img
                variant="top"
                loading={"lazy"}
                alt={item.title}
                src={item.imageUrl}
                width={"100%"}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </StyledCol>
        ))}
      </Row>
    </Container>
  );
};

export default MealsGridView;

const StyledCol = Styled(Col)`
  margin-bottom: 15px;
  padding: 10px;
`;
