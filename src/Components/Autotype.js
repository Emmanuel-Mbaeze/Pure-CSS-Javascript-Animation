import React from "react";
import styled from "styled-components";
const Autotype = () => {
  return (
    <Body>
      <Wrapper>
        <Title>I'm a</Title>
        <SUbtitle>
          <li>
            {" "}
            <span>Fullstack Developer</span>
          </li>
          <li>
            {" "}
            <span>Cloud Engineer </span>
          </li>
          <li>
            {" "}
            <span>ui/ux Designer</span>
          </li>
          <li>
            {" "}
            <span>Product Manager</span>
          </li>
        </SUbtitle>
      </Wrapper>
    </Body>
  );
};

export default Autotype;
// const Body = styled.div``
const SUbtitle = styled.div`
  margin-left: 15px;

  line-height: 90px;
  height: 90px;
  /* background-color: blue; */
  overflow: hidden;
  li {
    list-style: none;
    font-size: 60px;
    color: #fc6d6d;
    position: relative;
    top: 0;
    animation: slide 6s steps(4) infinite;

    @keyframes slide {
      100% {
        top: -360px;
      }
    }
  }
  span {
    position: relative;

    ::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      border-left: 2px solid #fc6d6d;
      left: 0;
      animation: typing 2s steps(10) infinite;
      background-color: #343f4f;
    }
    @keyframes typing {
      100% {
        left: 100%;
        margin: 0 -35px 0 35px;
      }
    }
  }
`;
const Title = styled.div`
  color: white;
  font-size: 60px;
`;
const Wrapper = styled.div`
  display: inline-flex;
`;
const Body = styled.div`
  background-color: #343f4f;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
