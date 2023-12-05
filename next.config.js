// https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
let nextConfig = {
  assetPrefix,
  basePath,
  experimental: {
    optimizePackageImports: [
      "@react-three/drei",
      "@react-three/fiber",
      "three",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  webpack(config) {
    // enable live reload when editing files in node_modules (for debugging purposes)
    config.snapshot = {
      ...(config.snapshot ?? {}),
      managedPaths: [/^(.+?[\\/]node_modules[\\/])(?!@liqvid)/],
    };
    return config;
  },
};

if (process.env.ANALYZE === "true") {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });
  nextConfig = withBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
