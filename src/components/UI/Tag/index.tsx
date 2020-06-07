import * as React from "react";

import { Container } from "./styled";

interface TagProps {
  children: React.ReactNode;
}

function Tag({ children }: TagProps) {
  return <Container>{children}</Container>;
}

export default Tag;
