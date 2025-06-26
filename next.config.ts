import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // 忽略 ESLint 错误和警告，允许 <img> 标签
    },
    // 其它配置可以继续加在这里
};

export default nextConfig;
