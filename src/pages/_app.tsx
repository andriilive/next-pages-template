import "@/styles/globals.css"

import React from "react"
import type { AppProps } from "next/app"
import { Poppins } from "next/font/google"
import { ThemeToggle } from "@/src/components/helpers/ThemeSwitch"
import { TwHelper } from "@/src/components/helpers/TwHelper"
import { Head } from "@/src/layouts/head"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const fontSans = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider attribute={"class"}>
      <Head />
      <TwHelper />
      <div className={"fixed bottom-1 right-1"}>
        <ThemeToggle />
      </div>
      <Component {...pageProps} />
    </NextThemesProvider>
  )
}
