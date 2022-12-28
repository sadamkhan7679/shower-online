const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
      "/douchebak": { page: "/douchebak" },
      "/douchewand": { page: "/douchewand" },
      "/faq": { page: "/faq" },
      "/infoCleanwall": { page: "/infoCleanwall" },
      "/infoColors": { page: "/infoColors" },
      "/infoHpl": { page: "/infoHpl" },
      "/manual": { page: "/manual" },
      "/privacy": { page: "/privacy" },
      //"/test": { page: "/test" },
      "/products": { page: "/products" },
      "/cart": { page: "/cart" },
    };
  },
  exportTrailingSlash: true,
});
