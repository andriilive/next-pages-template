import Link from "next/link"
import { Counter } from "@/src/components/counter"
import { siteConfig } from "@/src/data"
import DefaultLayout from "@/src/layouts/default"
import { subtitle, title, tvButton } from "@/src/theme/tw"
import { GithubIcon } from "lucide-react"

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Counter />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg justify-center text-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>
            websites regardless of your design experience.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            href={siteConfig.links.docs}
            className={tvButton({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Documentation
          </Link>
          <Link
            className={tvButton({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  )
}
