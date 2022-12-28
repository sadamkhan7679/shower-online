const sitemap = require("nextjs-sitemap-generator");

sitemap({
  alternateUrls: {
    nl: "http://shower-online.com",
    nl: "http://shower-online.be",
    nl: "http://www.shower-online.be",
    nl: "http://shower-online.nl",
    nl: "http://www.shower-online.nl",
  },
  baseUrl: "https://www.shower-online.com",
  //ignoredPaths: ['admin'],
  pagesDirectory: "out",
  targetDirectory: "public/",
  //nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: ["png", "jpg"],
  pagesConfig: {
    "/login": {
      priority: "0.5",
      changefreq: "daily",
    },
  },
});
