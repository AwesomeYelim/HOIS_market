import React from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";
import Slider from "./Slider";
import Products from "./Products";

function Main() {
  return (
    <>
      <Wrap>
        <Nav />
        <Slider />
        <Products />
      </Wrap>
    </>
  );
}

const Wrap = styled.body`
  margin: 0;
  padding: 0;
  boxsizing: border-box;
`;
export default Main;
