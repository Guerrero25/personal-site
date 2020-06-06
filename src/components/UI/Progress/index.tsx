import * as React from "react";

import {
  Container,
  Label,
  ProgressIndicator,
  ProgressBar,
  LabelContainer,
  ProgressContainer,
} from "./styled";

interface ProgressProps {
  progress: number;
  label?: string;
}

function Progress({ label, progress }: ProgressProps) {
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
        <ProgressIndicator>{progress}%</ProgressIndicator>
      </LabelContainer>
      <ProgressContainer>
        <ProgressBar progress={progress} />
      </ProgressContainer>
    </Container>
  );
}

export default Progress;
