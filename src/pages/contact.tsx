import React from "react";
import { Helmet } from "react-helmet";

import WhiteSpace from "../components/UI/WhiteSpace";
import Contact from "../components/Contact";

interface ContactPageProps {}

function ContactPage({}: ContactPageProps) {
  return (
    <>
      <Helmet title="Contact me" />
      <Contact />
      <WhiteSpace size={45} />
    </>
  );
}

export default ContactPage;
