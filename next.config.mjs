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
};

export default nextConfig;
