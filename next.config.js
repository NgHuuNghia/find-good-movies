const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
module.exports = withImages(
  withSass({
    // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    dynamicAssetPrefix: true,
    webpack(config, options) {
      return config;
    },
  })
);
