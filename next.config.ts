import type { NextConfig } from "next";

import { basePath } from "./src/lib/site";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
