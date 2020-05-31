import * as React from "react";

import { Container, H4, P, IconContainer } from "./styled";

interface InfoBlockProps {
  name: string;
  icon: React.ReactNode;
  description?: string;
  children?: string;
}

function InfoBlock({ icon, name, description, children }: InfoBlockProps) {
  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <H4>{name}</H4>
      <P>{description || children}</P>
    </Container>
  );
}

export default InfoBlock;
