import * as React from "react";

import { Container, CoverContainer, Cover, Tag, Title } from "./styled";

interface CardProps {
  cover: string;
  coverAlt?: string;
  title: string;
  tag?: string;
}

function Card({ cover, title, tag, coverAlt }: CardProps) {
  return (
    <Container>
      <CoverContainer>
        <Cover alt={coverAlt} src={cover} />
      </CoverContainer>
      {tag && <Tag>{tag}</Tag>}
      <Title>{title}</Title>
    </Container>
  );
}

export default Card;
