import * as React from "react";

import Title from "../../UI/Title";
import Timeline from "../../UI/Timeline";

import { Container } from "./styled";

interface ExperienceProps {}

function Experience({}: ExperienceProps) {
  return (
    <Container>
      <Title size={21}>Experience</Title>
      <Timeline>
        <Timeline.Item
          company="Fleks Works B.V."
          period={["2019", "Current"]}
          title="Lead Frontend Developer"
        >
          Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
          aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
          lobortis ante.
        </Timeline.Item>
        <Timeline.Item
          company="Elemento 43 S.A.S."
          period={["2018", "2019"]}
          title="Frontend Developer"
        >
          Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
          aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
          lobortis ante.
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default Experience;
