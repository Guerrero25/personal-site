import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 25px;
`;

export const IconContainer = styled.div`
  font-size: 42px;
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;

export const H4 = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
  color: ${({
    theme: {
      text: { titleColor },
    },
  }) => titleColor};
`;

export const P = styled.p`
  line-height: 24px;
  color: ${({
    theme: {
      text: { paragraphColor },
    },
  }) => paragraphColor};
`;
