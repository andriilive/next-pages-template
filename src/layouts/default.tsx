import * as React from "react"
import Link from "next/link"
import ShopNav from "@/draft/ShopNav"
import { ThemeToggle } from "@/src/components/helpers/ThemeSwitch"
import { TwHelper } from "@/src/components/helpers/TwHelper"
import { Nav } from "@/src/components/semantic/nav"
import { navItems } from "@/src/data"
import { Head } from "@/src/layouts/head"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`relative`}>
      <Head />
      <TwHelper />
      <div className={"container flex justify-between py-2"}>
        <Nav navItems={navItems} aria={"primary"} />
        <ThemeToggle />
      </div>
      <hr />
      <main className={"container mx-auto max-w-7xl px-6"}>{children}</main>
      <hr />
      <footer className={"flex w-full items-center justify-center py-3"}>
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
  )
}

export function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative`}>
      <ShopNav />
      <main className={"container mx-auto max-w-7xl px-6"}>{children}</main>
    </div>
  )
}

export function EmptyLayout({ children }: { children: React.ReactNode }) {
  return <main className={""}>{children}</main>
}
