import * as React from "react";

import Title from "../UI/Title";

import { Container } from "./styled";

interface PortfolioProps {}

function Portfolio({}: PortfolioProps) {
  return (
    <Container>
      <Title>Portfolio</Title>
    </Container>
  );
}

export default Portfolio;
