import * as React from "react";

import Title from "../../UI/Title";
import Item from "./Item";

import { Container } from "./styled";

interface TimelineProps {
  children: React.ReactNode;
}

function Timeline({ children }: TimelineProps) {
  return <Container>{children}</Container>;
}

Timeline.Item = Item;

export default Timeline;
