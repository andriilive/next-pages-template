import * as React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeToggle } from "@/src/components/helpers/ThemeSwitch"
import { TwHelper } from "@/src/components/helpers/TwHelper"
import { Nav } from "@/src/components/semantic/nav"
import { navItems } from "@/src/data"
import { Head } from "@/src/layouts/head"

const fontSans = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`relative ${fontSans.variable}`}>
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
