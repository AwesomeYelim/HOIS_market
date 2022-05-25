import React, { useState, useRef, useEffect } from "react";
import Slide from "../Components/Slide";
import styled from "styled-components";
import img from "../Images/깨부숨.png";

const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 500px;
  overflow: hidden;
`;

const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: burlywood;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
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
  text-align: center;
`;

const TotalSlids = 3;

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
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
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
      </Container>
      <Center>
        <Button onClick={PrevSlide}>Prev</Button>
        <Button onClick={NextSlide}>Next</Button>
      </Center>
    </>
  );
};

export default Slider;
