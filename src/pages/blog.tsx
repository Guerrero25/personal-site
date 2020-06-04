import React from "react";
import { Helmet } from "react-helmet";

import WhiteSpace from "../components/UI/WhiteSpace";
import Blog from "../components/Blog";

interface BlogPageProps {}

function BlogPage({}: BlogPageProps) {
  return (
    <>
      <Helmet title="Blog" />
      <Blog />
      <WhiteSpace size={45} />
    </>
  );
}

export default BlogPage;
