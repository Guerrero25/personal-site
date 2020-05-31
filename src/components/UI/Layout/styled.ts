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
  height: 100vh;
  padding: 60px;
  overflow-y: auto;
  margin: 0 auto;
  width: 100%;
  max-width: 1014px;
`;
