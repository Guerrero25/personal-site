import styled from "styled-components";

interface ProgressProps {
  progress: number;
}

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const LabelContainer = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;

  &::after {
    clear: both;
  }
`;

export const Label = styled.h5`
  font-size: 13px;
  font-weight: 600;
  color: ${({
    theme: {
      text: { titleColor },
    },
  }) => titleColor};
`;

export const ProgressIndicator = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({
    theme: {
      text: { paragraphColor },
    },
  }) => paragraphColor};
`;

export const ProgressContainer = styled.div`
  position: relative;
  padding: 2px;
  border: 1px solid
    ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  border-radius: 9px;
  height: 8px;
`;

export const ProgressBar = styled.div<ProgressProps>`
  position: absolute;
  border: 1px solid transparent;
  width: ${({ progress }) => progress}%;
  border-radius: 9px;
  background-color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;
