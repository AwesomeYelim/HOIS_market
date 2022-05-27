import React from "react";
import styled from "styled-components";
import "./reset.css";

const Slide = ({ img }) => {
  return <IMG src={img} />;
};

export default Slide;

const IMG = styled.img`
  width: 100%;
`;
