/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: [
        //     {
        //         protocol: "https",
        //         hostname: "**"
        //     }
        // ]
        domains: ["res.cloudinary.com", "i.ibb.co.com", "xdsoft.net"]
    },
    // this is suspense related error will ignore

    // it is not recommanded // or wrap the mail layout children with <Suspense fallback={<>loading..</>}>
    // experimental: {
    //     missingSuspenseWithCSRBailout: false,
    // },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
