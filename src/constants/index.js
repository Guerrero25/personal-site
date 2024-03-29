// Site Information
exports.NAME = process.env.NAME || process.env.GATSBY_NAME || "My site";
exports.SHORT_NAME =
  process.env.SHORT_NAME || process.env.GATSBY_SHORT_NAME || "site";
exports.TITLE =
  process.env.TITLE || process.env.GATSBY_TITLE || "This is my site";
exports.PREFIX = process.env.PREFIX || process.env.GATSBY_PREFIX || "";
exports.DESCRIPTION =
  process.env.DESCRIPTION ||
  process.env.GATSBY_DESCRIPTION ||
  "Create your own blog with Gatsby Advanced Blog";
exports.AUTHOR =
  process.env.AUTHOR || process.env.GATSBY_AUTHOR || "guerrero25";
exports.PROFESSION =
  process.env.PROFESSION || process.env.GATSBY_PROFESSION || "Web Developer";
exports.EMAIL =
  process.env.EMAIL || process.env.GATSBY_EMAIL || "example@gmail.com";
exports.KEYWORDS =
  process.env.KEYWORDS ||
  process.env.GATSBY_KEYWORDS ||
  ["Gatsby", "ReactJS"].join(", ");
exports.SITE_URL =
  process.env.SITE_URL || process.env.GATSBY_SITE_URL || "https://site.com";
exports.PROFILE =
  process.env.PROFILE || process.env.GATSBY_PROFILE || "profile";
exports.THEME_COLOR =
  process.env.THEME_COLOR || process.env.GATSBY_THEME_COLOR || "#663399";
exports.BACKGROUND_COLOR =
  process.env.BACKGROUND_COLOR ||
  process.env.GATSBY_BACKGROUND_COLOR ||
  "#663399";

// Social
exports.GITHUB_ID =
  process.env.GITHUB_ID || process.env.GATSBY_GITHUB_ID || "guerrero25";
exports.TWITTER_ID =
  process.env.TWITTER_ID || process.env.GATSBY_TWITTER_ID || "twitterID";
exports.FACEBOOK_ID =
  process.env.FACEBOOK_ID || process.env.GATSBY_FACEBOOK_ID || "facebookID";
exports.LINKEDIN_ID =
  process.env.LINKEDIN_ID || process.env.GATSBY_LINKEDIN_ID || "linkedidID";

// CV
exports.CV_LINK =
  process.env.CV_LINK || process.env.GATSBY_CV_LINK || "https://resume.link";

// Disqus (Recommend you to use this)
exports.DISQUS_ID = "sample";

// Google
exports.ANALYTICS_ID =
  process.env.ANALYTICS_ID || process.env.GATSBY_ANALYTICS_ID || "UA-12345677";
