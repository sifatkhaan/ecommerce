/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'themes.pixelstrap.com',
                port:'',
                pathname:'/**',
            }
        ]
    }
};

export default nextConfig;
