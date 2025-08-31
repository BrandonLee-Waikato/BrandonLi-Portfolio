// next.config.ts
import type { NextConfig } from "next";

const repo = "BrandonLi-Portfolio";
const isCI = process.env.GITHUB_ACTIONS === "true";
const basePath = isCI ? `/${repo}` : "";

const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    basePath: basePath || undefined,
    assetPrefix: basePath || undefined,
};

export default nextConfig;
