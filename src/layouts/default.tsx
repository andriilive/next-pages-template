import {TwHelper} from "@/src/components/helpers/TwHelper";
import {Nav} from "@/src/components/semantic/nav";
import {navItems} from "@/src/data";
import Link from "next/link";
import { Head } from "@/src/layouts/head";
import * as React from "react";

import {Inter} from "next/font/google"
const fontSans = Inter({
	subsets: ["latin"],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-sans',
})
export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={`relative ${fontSans.variable}`}>
			<Head />
			<TwHelper />
			<Nav navItems={navItems} aria={'primary'} />
			<main className={'container mx-auto max-w-7xl px-6'}>
				{children}
			</main>
			<footer className={'w-full flex items-center justify-center py-3'}>
				<Link
					className="flex items-center gap-1 text-current"
					href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
					title="nextui.org homepage"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">NextUI</p>
				</Link>
			</footer>
		</div>
	);
}
