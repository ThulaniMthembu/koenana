/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'koenanatrading.co.za',
				port: '',
				pathname: '/**',
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		// Add font file handling
		config.module.rules.push({
			test: /\.(woff|woff2|eot|ttf|otf)$/i,
			type: 'asset/resource',
		});

		return config;
	},
};

module.exports = nextConfig;
