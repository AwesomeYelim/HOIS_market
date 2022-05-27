import React from "react";
import styled from "styled-components";
import Product from "../Components/Product";

const Products = () => {
  return (
    <Wrap>
      <Product />
      <Product />
      <Product />
    </Wrap>
  );
};

const Wrap = styled.div`
display: flex;
gap: 5%;
margin: 50px 3%;
& Product{
    width: 30%;
}
`;



export default Products;
