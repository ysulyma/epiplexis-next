// https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: "export",
};

module.exports = nextConfig;
