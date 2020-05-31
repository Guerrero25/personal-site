import styled from "styled-components";

export const P = styled.p`
  line-height: 1.65em;
  font-size: 15px;
  text-align: left;
  color: ${({
    theme: {
      text: { paragraphColor },
    },
  }) => paragraphColor};
`;

export const Container = styled.section`
  width: 100%;
`;
