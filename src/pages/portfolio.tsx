import React from "react";
import { Helmet } from "react-helmet";

import WhiteSpace from "../components/UI/WhiteSpace";
import Portfolio from "../components/Portfolio";

interface PortfolioPageProps {}

function PortfolioPageProps({}: PortfolioPageProps) {
  return (
    <>
      <Helmet title="Portfolio" />
      <Portfolio />
      <WhiteSpace size={45} />
    </>
  );
}

export default PortfolioPageProps;
