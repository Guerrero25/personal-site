import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/UI/Layout";
import Home from "../components/Home";

interface IndexPageProps {}

function IndexPage({}: IndexPageProps) {
  return (
    <Layout>
      <Helmet title="Home" />
      <Home />
    </Layout>
  );
}

export default IndexPage;
