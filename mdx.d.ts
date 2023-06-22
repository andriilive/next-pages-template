// types/mdx.d.ts
import DefaultLayout from 'layouts/DefaultLayout'

declare module '*.mdx' {
	let MDXComponent: (props) => JSX.Element
	export default DefaultLayout(MDXComponent)
}
