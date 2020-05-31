import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/UI/Layout";
import WhiteSpace from "../components/UI/WhiteSpace";
import About from "../components/About";
import AboutWhatIDo from "../components/About/WhatIDo";

interface AboutPageProps {}

function AboutPage({}: AboutPageProps) {
  return (
    <Layout>
      <Helmet title="About me" />
      <About />
      <WhiteSpace size={50} />
      <AboutWhatIDo />
    </Layout>
  );
}

export default AboutPage;
