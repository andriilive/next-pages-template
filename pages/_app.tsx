import "@/styles/globals.css";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import type {AppProps} from "next/app";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <NextThemesProvider attribute={'class'}>
            <Component {...pageProps} />
        </NextThemesProvider>
    );
}