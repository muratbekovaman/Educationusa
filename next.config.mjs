/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['utfs.io', "github.com","cdn.jsdelivr.net"],
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'utsf.io',
                port: ""
            }
        ]
    }
};

export default nextConfig;
