import React from "react";
import { Helmet } from "react-helmet";

import WhiteSpace from "../components/UI/WhiteSpace";
import Resume from "../components/Resume";

interface ResumePageProps {}

function ResumePage({}: ResumePageProps) {
  return (
    <>
      <Helmet title="Resume" />
      <Resume />
      <WhiteSpace size={45} />
    </>
  );
}

export default ResumePage;
