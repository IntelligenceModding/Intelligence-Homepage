/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ['intelligence-modding.de'],
    },
    webpack: (config, context) => {
        // Enable polling based on env variable being set
        if(process.env.NEXT_WEBPACK_USEPOLLING) {
            config.watchOptions = {
                poll: 300,
                aggregateTimeout: 300
            }
        }
        return config
    },
}

module.exports = nextConfig
