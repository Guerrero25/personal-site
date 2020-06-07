import React from "react";
import { Helmet } from "react-helmet";

import WhiteSpace from "../components/UI/WhiteSpace";
import Grid from "../components/UI/Grid";

import Resume from "../components/Resume";
import ResumeEducation from "../components/Resume/Education";
import ResumeExperience from "../components/Resume/Experience";
import ResumeSkills from "../components/Resume/Skills";
import ResumeKnowledge from "../components/Resume/Knowledge";

interface ResumePageProps {}

function ResumePage({}: ResumePageProps) {
  return (
    <>
      <Helmet title="Resume" />
      <Resume />
      <Grid templateColumns="repeat(5, 1fr)" gap="15px">
        <Grid.Cell column="1 / span 3">
          <ResumeExperience />
          <WhiteSpace size={20} />
          <ResumeEducation />
        </Grid.Cell>
        <Grid.Cell column="4 / span 2">
          <ResumeSkills />
          <WhiteSpace size={20} />
          <ResumeKnowledge />
        </Grid.Cell>
      </Grid>
    </>
  );
}

export default ResumePage;
