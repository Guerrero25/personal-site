import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/UI/Layout";
import Home from "../components/Home";

interface IndexPageProps {}

function IndexPage({}: IndexPageProps) {
  return (
    <>
      <Helmet title="Home" />
      <Home />
    </>
  );
}

export default IndexPage;
