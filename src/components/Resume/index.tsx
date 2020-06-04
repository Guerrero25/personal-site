import * as React from "react";

import Title from "../UI/Title";

import { Container } from "./styled";

interface ResumeProps {}

function Resume({}: ResumeProps) {
  return (
    <Container>
      <Title>Resume</Title>
    </Container>
  );
}

export default Resume;
