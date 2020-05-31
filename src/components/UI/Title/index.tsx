import * as React from "react";

import { H2, Strong } from "./styled";

interface TitleProps {
  children: string;
  size?: number;
}

function Title({ children, size = 32 }: TitleProps) {
  const [firstWord, rest] = getDividedPhrase(children);

  return (
    <H2 size={size}>
      {firstWord} {rest && <Strong>{rest}</Strong>}
    </H2>
  );

  function getDividedPhrase(phrase: string) {
    const words = phrase.split(" ");
    const firstWord = words.slice(0, 1);
    const rest = words.slice(1);

    return [firstWord, rest.join(" ")];
  }
}

export default Title;
