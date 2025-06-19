import type { NextConfig } from "next";

const isGitHubPages = process.env.NODE_ENV === 'production';
const repoName = 'homepage';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}/` : '',
  trailingSlash: true,
};

export default nextConfig;
