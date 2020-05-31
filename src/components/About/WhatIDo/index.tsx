import * as React from "react";
import { FaReact } from "react-icons/fa";

import Title from "../../UI/Title";
import InfoBlock from "./InfoBlock";

import { Grid, Container } from "./styled";

interface WhatIDoProps {}

function WhatIDo({}: WhatIDoProps) {
  return (
    <Container>
      <Title size={21}>What I Do</Title>
      <Grid>
        <InfoBlock icon={<FaReact />} name="Web Development">
          More than 2 years working with web technologies building complex
          applications. I work mainly with ReactJS.
        </InfoBlock>
        <InfoBlock icon={<FaReact />} name="Web Development">
          More than 2 years working with web technologies building complex
          applications. I work mainly with ReactJS.
        </InfoBlock>
        <InfoBlock icon={<FaReact />} name="Web Development">
          More than 2 years working with web technologies building complex
          applications. I work mainly with ReactJS.
        </InfoBlock>
        <InfoBlock icon={<FaReact />} name="Web Development">
          More than 2 years working with web technologies building complex
          applications. I work mainly with ReactJS.
        </InfoBlock>
      </Grid>
    </Container>
  );
}

export default WhatIDo;
