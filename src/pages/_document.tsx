import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body className={`font-sans antialiased bg-background`}>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}