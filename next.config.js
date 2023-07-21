const shouldAnalyzeBundles =
  process.env.ANALYZE === "true" && process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
let nextConfig = {};

if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer = require("next-bundle-analyzer")({
    enabled: true,
  });
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
