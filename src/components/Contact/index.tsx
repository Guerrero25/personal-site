import * as React from "react";

import Title from "../UI/Title";

import { Container } from "./styled";

interface ContactProps {}

function Contact({}: ContactProps) {
  return (
    <Container>
      <Title>Contact</Title>
    </Container>
  );
}

export default Contact;
