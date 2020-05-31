import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  background-color: ${({
    theme: {
      layout: { backgroundColor },
    },
  }) => backgroundColor};
`;

export const Content = styled.section`
  flex: 1;
  min-height: 100%;
  padding: 60px;
`;
