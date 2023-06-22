import { Link } from '@nextui-org/link'
import { Navbar } from 'components/navbar'
import Head from 'layouts/parts/Head'
import type { ReactNode } from 'react'

function DefaultLayout({ children }: { children: ReactNode }) {
	return (
		<div className='relative flex h-screen flex-col'>
			<Head />
			<Navbar />
			<main className={'container max-w-[1200px]'}>{children}</main>
			<footer className='flex w-full items-center justify-center py-3'>
				<Link isExternal className='flex items-center gap-1 text-current' href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template' title='nextui.org homepage'>
					<span className='text-default-600'>Powered by</span>
					<p className='text-primary'>NextUI</p>
				</Link>
			</footer>
		</div>
	)
}

export default DefaultLayout
