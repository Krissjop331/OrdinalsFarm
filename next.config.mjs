/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  remotePatterns: [
	    {
	      protocol: 'http',
	      hostname: '89.35.124.123', // Замените на ваш домен
	    },
	  ],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
}

export default nextConfig
