const config = {
	locales: ['en', 'cs-CZ'],
	defaultLocale: 'en',
	pages: {
		'*': ['common'],
		'/404': ['section_error'],
		'/': ['page_home'],
	},
}

module.exports = config
