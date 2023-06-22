import type { Locale } from 'types/i18n'

type Config = {
	locales: ReadonlyArray<Locale>
	defaultLocale: Locale
	pages: {
		[string]: string[]
	}
}

declare const config: Config

export default config
