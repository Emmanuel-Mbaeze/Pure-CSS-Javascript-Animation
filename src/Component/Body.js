import React from "react";
import styled from "styled-components";
const Body = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Hello I'm <span>Emmanuel</span>, a <span>FullStack Developer</span>
        </Title>

        <Text>
          A FullStack Developer who's a skilled leader,benton achieveing goals
          with the ability to learn and work with team.Always bringing solutions
          to problems Entrypoint main 1.55 MiB (1.63 MiB) = static/js/bundle.js
          1.55 MiB main.b538e340671bd9f0a521.hot-update.js 5.63 KiB 2 auxiliary
          assets cached modules 1.43 MiB [cached] 115 modules runtime modules
          31.3 KiB 15 modules ./src/Component/Body.js 3.49 KiB [built] [code
          generated] webpack 5.68.0 compiled successfully in 1885 msKiB 15
          modules ./src/Component/Body.js 4.24 KiB [built] [code generated]
          webpack 5.68.0 compiled successfully in 1297 ms
        </Text>

        <Button>Let's Chat</Button>
      </Wrapper>
    </Container>
  );
};

export default Body;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 90vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: poppins;
  color: #ddd;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-top: 40px;
  position: relative;
  animation: title;
  animation-fill-mode: forwards;
  /* background:linear-gradient(to right, #2c5364, #0f2027); */
  animation-duration: 9s;
  @keyframes title {
    0% {
      top: -50px;
    }
    100% {
      top: 80px;
    }
  }
  span {
    color: orangered;
  }
`;
const Text = styled.div`
  font-size: 16px;
  font-family: poppins;
  font-weight: 300;
  margin-top: 120px;
  position: relative;
  animation: text;
  animation-fill-mode: forwards;
  animation-duration: 9s;
  @keyframes text {
    0% {
      left: -1000px;
    }
    100% {
      left: 0;
    }
  }
  /* text-align: center; */
`;
const Button = styled.button`
  padding: 10px 12px;
  border: none;
  outline: none;
  font-size: 17px;
  font-family: poppins;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 35px;
  opacity: 0;
  position: relative;
  animation: btn;
  animation-fill-mode: forwards;
  animation-duration: 9s;
  animation-delay: 10s;

  /* transition-property: transform; */
  /* transition-duration: 3s; */
  @keyframes btn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  :hover {
    background-color: transparent;
    color: orangered;
    /* transform: rotateY(180deg); */
    transform: scale(1.02);
    transition: all 650ms;
    border: 1.5px solid #ddd;
  }
`;
