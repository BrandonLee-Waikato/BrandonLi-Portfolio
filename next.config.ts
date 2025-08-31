// next.config.ts
import type { NextConfig } from "next";

const repo = "BrandonLi-Portfolio";
const isCI = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    basePath: isCI ? `/${repo}` : undefined,
};

export default nextConfig;
