import React, { useState, useRef, useEffect } from "react";
import Slide from "../Components/Slide";
import styled from "styled-components";
import img from "../Images/깨부숨.png";
import R_arrow from "../Images/Icon/right_arrow.svg";
import L_arrow from "../Images/Icon/left_arrow.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  height: 500px;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
`;

const Text = styled.div`
  text-align: center;
  color: burlywood;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const TotalSlids = 3;

const RButton = styled.img.attrs({
  src: `${R_arrow}`,
})`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  cursor: pointer;
`;

const LButton = styled.img.attrs({
  src: `${L_arrow}`,
})`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  cursor: pointer;
`;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TotalSlids) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TotalSlids);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; 
  }, [currentSlide]);

  return (
    <>
      <Container>
        <Text></Text>
        <SliderContainer ref={slideRef}>
          <Slide img={img} />
          <Slide img={img} />
          <Slide img={img} />
          <Slide img={img} />
        </SliderContainer>
        <Center>
          <LButton onClick={PrevSlide} />
          <RButton onClick={NextSlide} />
        </Center>
      </Container>
    </>
  );
};

export default Slider;
