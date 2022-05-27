import React from "react";
import styled from "styled-components";
import product_Img from "../Images/product.png";

const Product = () => {
  return (
    <>
      <Wrap>
        <ProductImg />
        <Sub>제주코딩베이스 캠프</Sub>
        <Main>네 개발잡니다 개발자키링 금속키링</Main>
        <Price>
          29,000<span>원</span>
        </Price>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 30%;
  //   background-color: #ccc;
  font-size: 18px;
  cursor: pointer;
`;

const ProductImg = styled.img.attrs({
  src: `${product_Img}`,
})`
  width: 100%;
  margin: 15px 0;
`;

const Sub = styled.p`
  font-size: 1rem;
  color: #767676;
  margin: 7px 0px;
`;
const Main = styled.p`
  font-size: 1rem;
`;
const Price = styled.h2`
  font-weight: bold;
  font-size: 1.4rem;
  margin: 10px 0px;
  & span {
    font-weight: 500;
    font-size: 1rem;
    margin-left: 3px;
  }
`;

export default Product;
