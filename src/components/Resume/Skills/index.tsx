import * as React from "react";

import Title from "../../UI/Title";

import { Container } from "./styled";

interface SkillsProps {}

function Skills({}: SkillsProps) {
  return (
    <Container>
      <Title size={21}>Coding Skills</Title>
    </Container>
  );
}

export default Skills;
