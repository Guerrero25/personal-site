import React from "react";

import Layout from "../components/UI/Layout";
import Home from "../components/Home";

interface IndexPageProps {}

function IndexPage({}: IndexPageProps) {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default IndexPage;
