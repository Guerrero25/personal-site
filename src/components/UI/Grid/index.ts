import styled, { StyledComponent, css } from "styled-components";

interface GridProps {
  gap?: string;
  columnMinSize?: string | number;
  templateColumns?: string;
  templateRows?: string;
}

interface CellProps {
  column?: string;
}

export const Grid: StyledComponent<any, GridProps> = styled.div<GridProps>`
  display: grid;
  width: 100%;
  ${({ templateColumns, columnMinSize }) => {
    if (templateColumns) return "";
    const minSize =
      typeof columnMinSize === "undefined"
        ? "288px"
        : typeof columnMinSize === "number"
        ? columnMinSize + "px"
        : columnMinSize;

    return css`
      grid-template-columns: repeat(
        auto-fill,
        minmax(min(${minSize}, 100%), 1fr)
      );
    `;
  }}
  ${({ templateColumns }) => {
    if (!templateColumns) return "";

    return css`
      grid-template-columns: ${templateColumns};
    `;
  }}
  ${({ templateRows }) => {
    if (!templateRows) return "";

    return css`
      grid-template-rows: ${templateRows};
    `;
  }}
  grid-gap: ${({ gap }) => gap || "1em"};

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const Cell = styled.div<CellProps>`
  ${({ column }) =>
    column
      ? css`
          grid-column: ${column};

          @media (max-width: 580px) {
            grid-column: initial;
          }
        `
      : ""}
`;

Grid.Cell = Cell;
export default Grid;
