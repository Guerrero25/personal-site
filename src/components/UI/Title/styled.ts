import styled from "styled-components";

interface H2Props {
  size: number;
}

export const H2 = styled.h2<H2Props>`
  font-size: ${({ size }) => size || 32}px;
  font-weight: 600;
  color: ${({
    theme: {
      text: { titleColor },
    },
  }) => titleColor};
  margin-bottom: 30px;
`;

export const Strong = styled.span`
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;
