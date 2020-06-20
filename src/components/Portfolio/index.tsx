import * as React from "react";

import Title from "../UI/Title";

import { Container } from "./styled";

interface PortfolioProps {
  categories: string[];
  projects: Project[];
}

function Portfolio({ categories, projects }: PortfolioProps) {
  return (
    <Container>
      <Title>Portfolio</Title>
      {projects.map(project => (
        <span>{project.title}</span>
      ))}
    </Container>
  );
}

export default Portfolio;
