import * as React from "react";

import { Container } from "./styled";

export default function MenuToggle(
  props: React.ComponentProps<typeof Container>
) {
  return (
    <Container {...props}>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
}
