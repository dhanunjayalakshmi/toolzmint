/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve one canonical host: send www.toolzmint.com to toolzmint.com
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.toolzmint.com" }],
        destination: "https://toolzmint.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
