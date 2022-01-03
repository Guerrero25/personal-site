import React from "react";
/* Constants */
import { DESCRIPTION, KEYWORDS, AUTHOR, TITLE, NAME } from "./constants";

const stylesStr = require("!raw-loader!./reset.css");

function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) {
  return (
    <html {...htmlAttributes} lang="en">
      <head>
        {headComponents}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
        <meta httpEquiv="Access-Control-Allow-Headers" content="*" />
        <meta httpEquiv="Access-Control-Expose-Headers" content="*" />
        <meta httpEquiv="Access-Control-Allow-Credentials" content="true" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="all" />
        <meta
          id="viewport"
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1, minimum-scale=5, maximum-scale=5"
        />
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="author" content={AUTHOR} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:site_name" content={NAME || TITLE} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="" /> */}
        {/* <meta property="og:image" content="" /> */}
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:locale" content="en_EN" />
        {/* <meta name="msapplication-TileImage" content="" /> */}
        {/* <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="" /> */}
        {/* <link rel="apple-touch-icon" type="image/vnd.microsoft.icon" href="" /> */}
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}

export default HTML;
