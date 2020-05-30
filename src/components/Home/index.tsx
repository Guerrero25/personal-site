import * as React from "react";
import { AUTHOR, PROFESSION } from "../../constants";

import { Content, Title, Description, Container } from "./styled";

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <Container>
      <Content>
        <Title>{AUTHOR}</Title>
        <Description>{PROFESSION}</Description>
      </Content>
    </Container>
  );
}

export default Home;
