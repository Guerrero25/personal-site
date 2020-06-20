import styled from "styled-components";

export const CoverContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Cover = styled.img`
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  display: block;
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

export const Title = styled.h4`
  padding: 15px 0;
  font-size: 16px;
  font-weight: 600;
`;

export const Tag = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  line-height: 15px;
  padding: 5px 9px;
  font-size: 11px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  background-color: ${({
    theme: {
      layout: { backgroundColor },
    },
  }) => backgroundColor};
`;

export const Container = styled.figure`
  overflow: hidden;
  position: relative;

  &:hover ${Tag} {
    opacity: 1;
  }

  &:hover ${Cover} {
    transform: scale(1.1);
  }
`;
