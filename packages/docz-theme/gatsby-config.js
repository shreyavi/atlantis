/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@jobber/docz-theme": path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: [
          "docz",
          "docz-core",
          "gatsby-theme-docz",
          "@jobber/components",
          "@jobber/design",
          "@jobber/docz-theme",
        ],
      },
    },
  ],
};