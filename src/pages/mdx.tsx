import React from "react"
import Image, { ImageProps } from "next/image"
import Link from "next/link"
import Content from "@/data/content.mdx"
import DefaultLayout from "@/src/layouts/default"
import { MDXProvider } from "@mdx-js/react"
import { MDXComponents } from "mdx/types"

const ResponsiveImage = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      alt={alt ?? ""}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...props}
    />
  )
}
const components: MDXComponents = {
  Image: ResponsiveImage,
  h1: (props) => {
    console.log(props)
    return <h1 {...props} />
  },
  Link: (props) => {
    return <Link {...props} />
  },
}

export default function Post(props: any) {
  return (
    <DefaultLayout {...props}>
      <MDXProvider components={components}>
        <div className={"prose"}>
          <Content />
        </div>
      </MDXProvider>
    </DefaultLayout>
  )
}
