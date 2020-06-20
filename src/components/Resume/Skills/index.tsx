import * as React from "react";

import Title from "../../UI/Title";
import Progress from "../../UI/Progress";
import WhiteSpace from "../../UI/WhiteSpace";

import { Container } from "./styled";

interface SkillsProps {}

function Skills({}: SkillsProps) {
  return (
    <Container>
      <Title size={21}>Technologies</Title>
      <Progress label="HTML/CSS" progress={80} />
      <Progress label="Javascript" progress={97} />
      <Progress label="Testing" progress={80} />
      <Progress label="NodeJS" progress={90} />
      <WhiteSpace size={30} />
      <Title size={21}>Frameworks/Libraries</Title>
      <Progress label="React JS" progress={99} />
      <Progress label="Redux" progress={99} />
      <Progress label="Webpack" progress={90} />
      <Progress label="React Native" progress={60} />
      <Progress label="Angular" progress={60} />
    </Container>
  );
}

export default Skills;
