import styled from "styled-components";

interface WhiteSpaceProps {
  size: number;
}

const WhiteSpace = styled.div<WhiteSpaceProps>`
  padding-bottom: ${({ size }) => size}px;
`;

export default WhiteSpace;
