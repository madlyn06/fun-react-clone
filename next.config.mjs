/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_WEB_URL: process.env.API_WEB_URL
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};
export default nextConfig;
