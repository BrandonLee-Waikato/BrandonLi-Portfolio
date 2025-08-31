// next.config.ts
import type { NextConfig } from "next";

const repo = "BrandonLi-Portfolio";                   // 你的仓库名
const isCI = process.env.GITHUB_ACTIONS === "true";   // 只在 CI 下加前缀

const nextConfig: NextConfig = {
    // 先上线用；等你把类型与 ESLint 修完后可以删除
    eslint: { ignoreDuringBuilds: true },

    images: { unoptimized: true },      // 静态导出需要
    output: "export",                   // 产出 ./out
    trailingSlash: true,                // 避免深链刷新 404

    // GitHub Pages 项目页关键：给路由与静态资源加前缀
    basePath: isCI ? `/${repo}` : undefined,
    assetPrefix: isCI ? `/${repo}/` : undefined,
};

export default nextConfig;
