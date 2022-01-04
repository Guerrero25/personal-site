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
          company="Sophilabs"
          period={["Sep 2021", "Present"]}
          title="Frontend Developer"
        >
          I work at Nifty Gateway platform as a Mid-Senior frontend developer
        </Timeline.Item>
        <Timeline.Item
          company="Elemento 43 S.A.S."
          period={["Dic 2020", "Sep 2021"]}
          title="Lead Frontend Developer"
        >
          As a Mid-Senior frontend developer I worked on different clients
          creating new features and improving the performance and code
          organization.
          <br />
          <br />
          <a href="https://joinsmiler.com/">Smiler</a>: Builded and maintained
          the new admin dashboard for planning photographers, improved the
          performance of the photographer application and implemented the new
          designs of the consumer platform
          <br />
          <br />
          Viamedica: Created a platform to plan and simplify the contraction on
          healthcare staffing
        </Timeline.Item>
        <Timeline.Item
          company="Fleks Works B.V."
          period={["2019", "Dic 2020"]}
          title="Lead Frontend Developer"
        >
          My role is to be the technical lead of a small team of front-end
          developers at one of the most growing startups in the Netherlands.
        </Timeline.Item>
        <Timeline.Item
          company="Elemento 43 S.A.S."
          period={["2018", "2019"]}
          title="Frontend Developer"
        >
          As a junior developer, my role was to improve and maintain software
          made by the company. Working along with a young and talent team I
          dealt with new challenges that improved my skills in ReactJS and web
          development.
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default Experience;
