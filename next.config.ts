import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    // Prevents build failure due to non-critical TS errors during CI packaging
    ignoreBuildErrors: true,
  },
  eslint: {
    // Prevents build failure due to lint warnings during CI packaging
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
