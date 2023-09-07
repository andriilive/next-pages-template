import "@/styles/globals.css";
import {fonts} from "@/theme/fonts";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import type {AppProps} from "next/app";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute={'class'}>
                <style global jsx>
                    {`
                      :root {
                        --font-sans: ${fonts.sans.var};
                      }
                    `}
                </style>
                <Component {...pageProps} />
            </NextThemesProvider>
        </NextUIProvider>
    );
}