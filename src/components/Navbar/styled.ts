import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
`;

interface OptionItemProps {
  active?: boolean;
}

export const OptionItem = styled.li<OptionItemProps>`
  line-height: 45px;
  font-size: 16px;
  text-align: center;
  transition: opacity 0.4s ease-out, background-color 0.3s linear;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  color: ${({
    theme: {
      sidebar: { titleColor },
    },
  }) => titleColor};

  :active {
    opacity: 0.3;
    background-color: ${({
      theme: {
        sidebar: { titleColor },
      },
    }) => titleColor};
  }
`;
