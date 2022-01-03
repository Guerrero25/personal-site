import styled from "styled-components";

export const ButtonBase = styled.button`
  display: inline-block;
  position: relative;
  padding: 0.8em 2.1em;
  margin-bottom: 0.75em;
  margin-right: 0.25em;
  font-size: 1em;
  line-height: 1.2;
  outline: 0;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: none;
  background-color: transparent;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.3);

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: scale(0.8);
  }
`;
