import {TwHelper} from "@/components/TwHelper";
import {NavigationMenuShadcn} from "@/layouts/shadcn";
import Link from "next/link";
import { Head } from "@/layouts/head";
import * as React from "react";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={'relative'}>
			<Head />
			<TwHelper />
			<NavigationMenuShadcn />
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
