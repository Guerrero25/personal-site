import * as React from "react";

import Tag from "../../UI/Tag";
import Title from "../../UI/Title";
import { KnowledgeList } from "./config";

import { Container, List, Item } from "./styled";

interface KnowledgeProps {}

function Knowledge({}: KnowledgeProps) {
  return (
    <Container>
      <Title size={21}>Knowledge</Title>
      <List>
        {KnowledgeList.map(item => (
          <Item>
            <Tag>{item}</Tag>
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default Knowledge;
