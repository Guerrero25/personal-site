import * as React from "react";
import { Helmet } from "react-helmet";
import { TITLE, DESCRIPTION } from "../../../constants";

import { useAppContext } from "../../App/context";
import App from "../../App";

import { Container, Content } from "./styled";
import Sidebar from "../../Sidebar";

export { Content } from "./styled";

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
          defaultTitle={TITLE}
          titleTemplate={`%s | ${TITLE}`}
        >
          <meta name="description" content={DESCRIPTION} />
        </Helmet>
        <Sidebar />
        <Content>{children}</Content>
      </Container>
    </App>
  );
}

export default Layout;
