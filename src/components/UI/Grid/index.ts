import styled from "styled-components";

interface GridProps {
  gap?: string;
  columnMinSize?: string | number;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      min(
        ${({ columnMinSize }) => {
          if (typeof columnMinSize === "undefined") {
            return "288px";
          }

          return typeof columnMinSize === "number"
            ? columnMinSize + "px"
            : columnMinSize;
        }},
        100%
      ),
      1fr
    )
  );
  grid-gap: ${({ gap }) => gap || "1em"};
`;

export default Grid;
