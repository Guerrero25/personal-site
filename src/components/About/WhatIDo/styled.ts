import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(288px, 100%), 1fr));
  grid-gap: 1rem;
`;
