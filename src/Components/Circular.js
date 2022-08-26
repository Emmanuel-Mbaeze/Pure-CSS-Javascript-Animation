import React from "react";
import styled from "styled-components";
const Circular = () => {
  return (
    <Container>
      <Slider>
        <span
          style={{
            transform: "rotateY(calc(1*45deg)) translateZ(350px)",
          }}
        >
          <img src="/images/1.jpg" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(2*45deg)) translateZ(350px)",
          }}
        >
          <img src="/images/2.jpg" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(3*45deg)) translateZ(350px)",
          }}
        >
          <img src="/images/3.jpg" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(4*45deg)) translateZ(350px)",
          }}
        >
          <img src="/images/4.jpg" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(5*45deg)) translateZ(350px)",
          }}
        >
          <img src="/images/5.jpg" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(6*45deg)) translateZ(350px)",
          }}
        >
          <img src="/images/6.png" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(7*45deg)) translateZ(350px)",
          }}
        >
          <img src="/images/7.jpg" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(8*45deg)) translateZ(350px)",
          }}
        >
          <img src="/images/8.jpg" />
        </span>
      </Slider>
    </Container>
  );
};

export default Circular;
const Container = styled.div`
  background: linear-gradient(to right, #2c5364, #0f2027);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Slider = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: rotate 30s linear infinite;

  @keyframes rotate {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }
    0% {
      transform: perspective(1000px) rotateY(360deg);
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    img {
      object-fit: cover;
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 2s;
      cursor: pointer;
      :hover {
        transform: translateY(-50px) scale(1.2);
      }
    }
  }
`;
// const Container = styled.div``
// const Container = styled.div``
