import React from "react";
/* Constants */
import {
  DESCRIPTION,
  KEYWORDS,
  AUTHOR,
  TITLE,
  NAME,
  ANALYTICS_ID,
} from "./constants";

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
          content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        ></link>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());

          gtag("config", "${ANALYTICS_ID}");`,
          }}
        ></script>
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
