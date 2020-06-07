import styled from "styled-components";

export const Container = styled.span`
  padding: 1px 10px;
  font-size: 13px;
  border-radius: 3px;
  line-height: 20px;
  font-weight: 500;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};
  background-color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;
