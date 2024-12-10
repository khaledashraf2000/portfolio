/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Add raw-loader for .glsl and .frag files
        config.module.rules.push({
            test: /\.(glsl|frag)$/,
            type: 'asset/source',
        });

        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "m.media-amazon.com", // Replace with the domain of your image
            },
            {
                protocol: "https",
                hostname: "images-na.ssl-images-amazon.com",
            },
            {
                protocol: "https",
                hostname: "miro.medium.com",
            },
        ],
    },
};

export default nextConfig;
