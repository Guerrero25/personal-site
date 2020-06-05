import React from "react";
import { Helmet } from "react-helmet";

import WhiteSpace from "../components/UI/WhiteSpace";
import Resume from "../components/Resume";
import ResumeEducation from "../components/Resume/Education";
import ResumeExperience from "../components/Resume/Experience";

interface ResumePageProps {}

function ResumePage({}: ResumePageProps) {
  return (
    <>
      <Helmet title="Resume" />
      <Resume />
      <ResumeExperience />
      <WhiteSpace size={20} />
      <ResumeEducation />
      <WhiteSpace size={45} />
    </>
  );
}

export default ResumePage;
