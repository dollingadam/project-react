import React from "react";
import styled from "styled-components";
function HomeSection() {
  return (
    <Wrap>
      <WelcomeText>Välkommen till kattHemmet</WelcomeText>
    </Wrap>
  );
}
const Wrap = styled.div`
  background: url("/image/Cat.webp");
  height: 100vh;
  background-position: center;
  background-size: cover;
  align-items: center;
`;
const WelcomeText = styled.h1`
  position: absolute;
  left: 10;
  top: 20%;
  padding: 1rem;
  color: white;
`;
export default HomeSection;
