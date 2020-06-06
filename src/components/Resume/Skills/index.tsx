import * as React from "react";

import Title from "../../UI/Title";
import Progress from "../../UI/Progress";

import { Container } from "./styled";

interface SkillsProps {}

function Skills({}: SkillsProps) {
  return (
    <Container>
      <Title size={21}>Coding Skills</Title>
      <Progress label="React JS" progress={99} />
      <Progress label="HTML/CSS" progress={80} />
      <Progress label="Javascript" progress={97} />
      <Progress label="React Native" progress={60} />
      <Progress label="Angular" progress={60} />
    </Container>
  );
}

export default Skills;
