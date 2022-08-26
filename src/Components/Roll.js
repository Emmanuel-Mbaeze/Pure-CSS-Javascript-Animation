import React from "react";
import styled from "styled-components";
const Roll = () => {
  return (
    <Container>
      <Box></Box>
    </Container>
  );
};

export default Roll;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  width: 85px;
  height: 85px;
  background-color: black;
  border-radius: 5px;
  overflow: hidden;
  border: 1.5px solid black;
  position: relative;
  outline: 0;
  ::before {
    content: "Manel";
    font-size: 20px;
    font-family: arvo;
    font-weight: 500;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -22%;
    left: -22%;
    width: 125px;
    height: 125px;
    background-color: white;
    border-radius: 45%;
    animation: spin 6s ease-in-out forwards;
  }

  @keyframes spin {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(-100%) rotate(500deg);
    }
  }
`;
