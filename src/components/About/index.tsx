import * as React from "react";

import Title from "../UI/Title";

import { P, Container } from "./styled";

interface AboutProps {}

function About({}: AboutProps) {
  return (
    <Container>
      <Title>About Me</Title>
      <P>
        Hi there, my name is Omar Guerrero I am a colombian software engineer,
        Lead of the front-end team at @FleksWorks. I have focused my career to
        the web development using React as a UI runtime for building web and
        mobile applications.
      </P>
    </Container>
  );
}

export default About;
