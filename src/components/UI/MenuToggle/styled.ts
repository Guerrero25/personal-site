import styled from "styled-components";

interface MenuToggleProps {
  open?: boolean;
}

export const Container = styled.div<MenuToggleProps>`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 20;
  background-color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};

  span {
    display: block;
    background-color: white;
    height: 3px;
    position: absolute;
    top: ${({ open }) => (open ? 13 : 16)}px;
    left: ${({ open }) => (open ? "15px" : "25%")};
    width: 50%;
    border-radius: 5px;
    transition: transform 0.5s ease-in-out, opacity 0.1s ease-in-out;
    transform-origin: left center;
    transform: rotate(${({ open }) => (open ? 45 : 0)}deg);
  }

  span:nth-child(2) {
    top: 22px;
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  span:nth-child(3) {
    top: ${({ open }) => (open ? 30 : 28)}px;
    transform: rotate(${({ open }) => (open ? -45 : 0)}deg);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
