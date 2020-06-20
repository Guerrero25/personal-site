import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import WhiteSpace from "../../components/UI/WhiteSpace";
import Portfolio from "../../components/Portfolio";

interface PortfolioPageProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: Project;
        };
      }[];
    };
  };
}

function PortfolioPageProps({
  data: {
    allMarkdownRemark: { edges },
  },
}: PortfolioPageProps) {
  const categories = [
    ...new Set(
      edges.map(
        ({
          node: {
            frontmatter: { category },
          },
        }) => category
      )
    ),
  ];
  const projects = edges.map(({ node: { frontmatter } }) => frontmatter);

  return (
    <>
      <Helmet title="Portfolio" />
      <Portfolio categories={categories} projects={projects} />
      <WhiteSpace size={45} />
    </>
  );
}

export default PortfolioPageProps;

export const query = graphql`
  query PortfolioPageQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "project" }, published: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            category
            path
            title
            summary
            website
            cover
          }
        }
      }
    }
  }
`;
