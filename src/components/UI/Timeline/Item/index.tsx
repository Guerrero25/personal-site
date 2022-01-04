import * as React from "react";

import {
  Container,
  Left,
  LeftTitle,
  LeftSubTitle,
  Divider,
  Content,
  ContentTitle,
  ContentDescription,
} from "./styled";

interface TimelineItemProps {
  period: string[];
  company: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

function TimeLineItem({
  period,
  company,
  title,
  description,
  children,
}: TimelineItemProps) {
  return (
    <Container>
      <Left>
        <LeftTitle>{period.join(" - ")}</LeftTitle>
        <LeftSubTitle>{company}</LeftSubTitle>
      </Left>
      <Divider />
      <Content>
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>{children || description}</ContentDescription>
      </Content>
    </Container>
  );
}

export default TimeLineItem;
