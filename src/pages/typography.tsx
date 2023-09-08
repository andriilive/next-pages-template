import { Typo } from "@/src/components.draft"
import DefaultLayout from "@/src/layouts/default"

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div
        className={
          "mx-auto max-w-[1280px] space-y-10 divide-y divide-white px-8"
        }
      >
        <section className={"py-10"}>
          <span className={"text-muted-foreground"}>Pure</span>
          <Typo />
        </section>
        <section className={"py-10"}>
          <div className={"prose max-w-[1280px]"}>
            <span className={"text-muted-foreground"}>
              @tailwindcss/typography
            </span>
            <Typo />
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}
