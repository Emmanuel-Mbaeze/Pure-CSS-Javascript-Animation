import React from "react";
import styled from "styled-components";
import "../../src/App.css";
const Onscroll = () => {
  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  window.addEventListener("scroll", reveal);

  return (
    <Body>
      <Section>
        <h1>I'm Emmanuel Mbaeze</h1>
      </Section>
      <Section>
        <Container className="reveal">
          <h2>React JS</h2>
          <Card>
            <Text>
              <h4>Frontend</h4>
              <p>
                {" "}
                Line 40:11: img elements must have an alt prop, either with
                meaningful text, or an empty string for decorative images
                jsx-a11y/alt-text webpack 5.68.0 compiled with 1 warning in 5672
                ms
              </p>
            </Text>
            <Text>
              <h4>Frontend</h4>
              <p>
                {" "}
                Line 40:11: img elements must have an alt prop, either with
                meaningful text, or an empty string for decorative images
                jsx-a11y/alt-text webpack 5.68.0 compiled with 1 warning in 5672
                ms
              </p>
            </Text>
            <Text>
              <h4>Frontend</h4>
              <p>
                {" "}
                Line 40:11: img elements must have an alt prop, either with
                meaningful text, or an empty string for decorative images
                jsx-a11y/alt-text webpack 5.68.0 compiled with 1 warning in 5672
                ms
              </p>
            </Text>
          </Card>
        </Container>
      </Section>
      <Section>
        <Container className="reveal">
          <h2>Node JS</h2>
          <Card>
            <Text>
              <h4>Backend</h4>
              <p>
                {" "}
                Line 40:11: img elements must have an alt prop, either with
                meaningful text, or an empty string for decorative images
                jsx-a11y/alt-text webpack 5.68.0 compiled with 1 warning in 5672
                ms
              </p>
            </Text>
            <Text>
              <h4>Backend</h4>
              <p>
                {" "}
                Line 40:11: img elements must have an alt prop, either with
                meaningful text, or an empty string for decorative images
                jsx-a11y/alt-text webpack 5.68.0 compiled with 1 warning in 5672
                ms
              </p>
            </Text>
            <Text>
              <h4>Backend</h4>
              <p>
                {" "}
                Line 40:11: img elements must have an alt prop, either with
                meaningful text, or an empty string for decorative images
                jsx-a11y/alt-text webpack 5.68.0 compiled with 1 warning in 5672
                ms
              </p>
            </Text>
          </Card>
        </Container>
      </Section>
      <Section>
        <Container className="reveal">
          <h2>Ui/Ux</h2>
          <Card>
            <Text>
              <h4>Figma</h4>
              <p>
                {" "}
                Line 40:11: img elements must have an alt prop, either with
                meaningful text, or an empty string for decorative images
                jsx-a11y/alt-text webpack 5.68.0 compiled with 1 warning in 5672
                ms
              </p>
            </Text>
            <Text>
              <h4>Figma</h4>
              <p>
                {" "}
                Line 40:11: img elements must have an alt prop, either with
                meaningful text, or an empty string for decorative images
                jsx-a11y/alt-text webpack 5.68.0 compiled with 1 warning in 5672
                ms
              </p>
            </Text>
            <Text>
              <h4>Figma</h4>
              <p>
                {" "}
                Line 40:11: img elements must have an alt prop, either with
                meaningful text, or an empty string for decorative images
                jsx-a11y/alt-text webpack 5.68.0 compiled with 1 warning in 5672
                ms
              </p>
            </Text>
          </Card>
        </Container>
      </Section>
    </Body>
  );
};

export default Onscroll;
// const Body = styled.div``
// const Body = styled.div``
// const Body = styled.div``
const Text = styled.div`
  background: #2696e9;
  margin: 10px;
  padding: 5px;
  h4 {
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;
const Card = styled.div`
  display: flex;
`;
const Container = styled.div`
  margin: 100px;
  /* background-color: burlywood; */
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
  }
`;
const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-child(1) {
    color: #fff;
  }
  :nth-child(2) {
    background: #fff;
    color: #1d212b;
  }
  :nth-child(3) {
    color: #fff;
  }
  :nth-child(4) {
    background: #fff;
    color: #1d212b;
  }
`;
const Body = styled.div`
  background: #1d212b;
`;
