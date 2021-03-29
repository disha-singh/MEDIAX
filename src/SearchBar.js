import { colors } from "@material-ui/core";
import { ArrowDropDown, BlockOutlined } from "@material-ui/icons";
import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const onFormSubmit = ({ keyword }) => {};

  const BarStyling = {
    width: "15rem",
    background: "lightgrey",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <form onSubmit={() => onFormSubmit(keyword)}>
      <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search"}
      />
    </form>
  );
};

export default SearchBar;
