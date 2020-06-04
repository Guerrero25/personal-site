import * as React from "react";

import Title from "../UI/Title";

import { Container } from "./styled";

interface BlogProps {}

function Blog({}: BlogProps) {
  return (
    <Container>
      <Title>Blog</Title>
    </Container>
  );
}

export default Blog;
