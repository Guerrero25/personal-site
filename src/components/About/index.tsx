import * as React from "react";

import Title from "../UI/Title";

import { P, Container } from "./styled";

interface AboutProps {}

function About({}: AboutProps) {
  return (
    <Container>
      <Title>About Me</Title>
      <P>
        Hi there, I am Omar Guerrero I am a Software Engineer and in my free
        time a guitarist. I work mainly with ReactJS and
        currently I am working at @FleksWorks as a Frontend Developer.
      </P>
    </Container>
  );
}

export default About;
