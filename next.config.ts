import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        inlineCss: true
    },
    trailingSlash: true,
};

export default nextConfig;
