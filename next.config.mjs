/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.cosmicjs.com"
			}
		]
	}
};

export default nextConfig;
