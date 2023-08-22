import React from "react";
import styled from "styled-components";
import AboutContent from "../Components/AboutContent";

const Container = styled.div`
  margin-top: 80px;
`;

const About = () => {
  return (
    <>
      <Container>
        <AboutContent />
      </Container>
    </>
  );
};

export default About;
