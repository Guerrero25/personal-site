import * as React from "react";
import { FaReact, FaRocket, FaDraftingCompass, FaMobile } from "react-icons/fa";

import Title from "../../UI/Title";
import Grid from "../../UI/Grid";
import InfoBlock from "./InfoBlock";

import { Container } from "./styled";

interface WhatIDoProps {}

function WhatIDo({}: WhatIDoProps) {
  return (
    <Container>
      <Title size={21}>What I Do</Title>
      <Grid>
        <InfoBlock icon={<FaReact />} name="Web Development">
          More than 2 years working with web technologies by building complex
          applications.
        </InfoBlock>
        <InfoBlock icon={<FaRocket />} name="Performance">
          Building applications not just with the latest technologies but with
          the best performance.
        </InfoBlock>
        <InfoBlock icon={<FaDraftingCompass />} name="UX/UI">
          Understanding the users needs in order to build interfaces that add
          relevant value to their experience.
        </InfoBlock>
        <InfoBlock icon={<FaMobile />} name="Mobile Development">
          Building applications for Android and iOS.
        </InfoBlock>
      </Grid>
    </Container>
  );
}

export default WhatIDo;
