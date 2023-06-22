const nextTranslate = require('next-translate-plugin')
const withMDX = require('@next/mdx')()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

/*** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/humans.txt',
				destination: '/api/humans.txt',
			},
		]
	},
}

module.exports = nextTranslate(
	withBundleAnalyzer(
		withMDX({
			reactStrictMode: false,
			pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
			...nextConfig,
		}),
	),
)
