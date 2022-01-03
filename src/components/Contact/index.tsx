import * as React from "react";

import Button from "../UI/Button";
import Input from "../UI/Input";
import Title from "../UI/Title";

import { Container, Form } from "./styled";

interface ContactProps {}

function Contact({}: ContactProps) {
  return (
    <Container>
      <Title>Contact</Title>
      <Form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input required id="name" label="Full name" />
        <Input required id="email" label="Email" />
        <Input required id="subject" label="Subject" />
        <Input required id="message" label="Message" as="textarea" />
        <Button type="submit">Send message</Button>
      </Form>
    </Container>
  );
}

export default Contact;
