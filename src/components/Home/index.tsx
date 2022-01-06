import * as React from "react";
import { AUTHOR, CV_LINK, PROFESSION } from "../../constants";

import { ButtonBase } from "../UI/Button/styled";

import { Content, Title, Description, Container } from "./styled";

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <Container>
      <Content>
        <Title>Hi, I'm {AUTHOR}</Title>
        <Description>{PROFESSION}</Description>
        <ButtonBase
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href={CV_LINK}
        >
          Download CV
        </ButtonBase>
      </Content>
    </Container>
  );
}

export default Home;
