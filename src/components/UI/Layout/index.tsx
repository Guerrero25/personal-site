import * as React from "react";
import { Helmet } from "react-helmet";

import { useAppContext } from "../../App/context";
import App from "../../App";

import { Container } from "./styled";
import Sidebar from "../../Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { lang } = useAppContext();

  return (
    <App>
      <Container>
        <Helmet
          htmlAttributes={{
            lang,
          }}
        />
        <Sidebar />
        {children}
      </Container>
    </App>
  );
}

export default Layout;
