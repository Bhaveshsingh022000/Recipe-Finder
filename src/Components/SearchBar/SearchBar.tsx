import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";

type SearchBarProps = {
  onSearchTextChange: (text: string) => void;
  onSearchMeal: () => void;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        onChange={(event) => props.onSearchTextChange(event.target.value)}
        placeholder="Search meal..."
      />
      <Button onClick={() => props.onSearchMeal()}>Search</Button>
    </InputGroup>
  );
};

export default SearchBar;
