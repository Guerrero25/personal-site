import styled, { css } from "styled-components";

interface TabProps {
  active?: boolean;
}

export const Container = styled.ul`
  line-height: 15px;
  margin-bottom: 30px;
`;

export const Tab = styled.li<TabProps>`
  display: inline-block;
  margin-right: 2em;
  font-size: 16px;
  font-weight: 500;
  transition: border-bottom 0.12s ease-in-out;
  cursor: pointer;
  ${({
    active,
    theme: {
      text: { titleColor },
    },
  }) => {
    return css`
      opacity: ${active ? 1 : 0.7};
      border-bottom: ${active ? 1 : 0}px solid ${titleColor};
    `;
  }}
`;
