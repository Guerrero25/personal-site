import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 20px;
  color: ${({
    theme: {
      text: { titleColor },
    },
  }) => titleColor};

  @media (min-width: 1024px) {
    line-height: 74px;
    font-size: 60px;
    margin-bottom: 0;
  }
`;

export const Description = styled.h4`
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 20px;
  color: ${({
    theme: {
      text: { paragraphColor },
    },
  }) => paragraphColor};

  @media (min-width: 1024px) {
    font-size: 21px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 680px;
`;
