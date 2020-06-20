import * as React from "react";

import Title from "../../UI/Title";
import Timeline from "../../UI/Timeline";

import { Container } from "./styled";

interface EducationProps {}

function Education({}: EducationProps) {
  return (
    <Container>
      <Title size={21}>Education</Title>
      <Timeline>
        <Timeline.Item
          company="Universidad de Cartagena"
          period={["2014", "2019"]}
          title="Software Engineering"
        >
          Learning the fundamentals of software architecture, data structures,
          and the software building process.
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default Education;
