import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // 忽略 ESLint 错误和警告，允许 <img> 标签
    },

    //1
    output: "export",
};

export default nextConfig;
