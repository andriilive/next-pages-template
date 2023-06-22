declare module '*.module.pcss.css' {
	const classes: { readonly [key: string]: string }
	export default classes
}

/* Link with children */
declare module 'next/link' {
	export type LinkProps = LinkProps & { children?: React.ReactNode }
}
