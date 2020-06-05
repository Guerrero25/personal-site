import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-bottom: 20px;
  width: 100%;

  @media (min-width: 480px) {
    display: flex;
  }
`;

export const Left = styled.div`
  padding: 0 20px;
  margin-bottom: 10px;

  @media (min-width: 480px) {
    width: 30%;
    text-align: right;
  }
`;

export const LeftTitle = styled.h5`
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 600;
  opacity: 0.7;
  color: ${({
    theme: {
      text: { paragraphColor },
    },
  }) => paragraphColor};
`;

export const LeftSubTitle = styled.p`
  font-weight: 300;
  font-size: 13px;
  margin-bottom: 4px;
  color: ${({
    theme: {
      text: { paragraphColor },
    },
  }) => paragraphColor};
`;

export const Divider = styled.div`
  position: absolute;
  left: 0;
  top: -6px;
  height: 100%;
  width: 1px;
  opacity: 0.7;
  background-color: ${({
    theme: {
      sidebar: { backgroundColor },
    },
  }) => backgroundColor};

  &::after,
  &::before {
    content: "";
    position: absolute;
  }

  &::before {
    top: 4px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    opacity: 0.25;
    z-index: 0;
    margin-left: -8px;
    background-color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }

  &::after {
    top: 6px;
    margin-left: -6px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    opacity: 0.25;
    z-index: 1;
    background-color: ${({
      theme: {
        layout: { backgroundColor },
      },
    }) => backgroundColor};
    border: 2px solid
      ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
  }

  ${Container}:first-child & {
    top: 0;
  }

  ${Container}:not(:first-child) &::before {
    top: 10px;
  }

  ${Container}:not(:first-child) &::after {
    top: 12px;
  }

  @media (min-width: 480px) {
    left: 30%;
  }
`;

export const Content = styled.div`
  padding-left: 20px;

  @media (min-width: 480px) {
    width: 70%;
  }
`;

export const ContentTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({
    theme: {
      text: { titleColor },
    },
  }) => titleColor};
`;

export const ContentDescription = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${({
    theme: {
      text: { paragraphColor },
    },
  }) => paragraphColor};
`;
