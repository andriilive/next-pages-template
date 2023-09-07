import {Inter as FontSans} from "next/font/google"

const fontSans = FontSans({
    subsets: ["latin"]
})

const fontSansVars = fontSans.style.fontFamily.split(",");

export const fonts = {
    sans: {
        var: fontSansVars[0],
        ...fontSans
    }
}

export type Fonts = typeof fonts