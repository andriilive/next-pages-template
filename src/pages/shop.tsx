import { NextPage } from "next"
import Container from "@/src/components/ui/container"
import { topNavItems } from "@/src/data"
import { EmptyLayout } from "@/src/layouts/default"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { ArrowRight, ShoppingBag } from "lucide-react"

const Shop: NextPage = () => {
  return (
    <>
      <EmptyLayout>
        <div className={"bg-foreground py-2 text-sm text-background/80"}>
          <Container className={"flex justify-between"}>
            <select
              className={
                "w-[65px] appearance-none border-0 bg-transparent p-0 font-sans text-sm"
              }
            >
              <option>USD</option>
              <option>EUR</option>
            </select>
            <nav
              className={"ml-auto divide-x divide-dashed divide-background/20"}
            >
              {topNavItems.map(({ title, description, ...props }) => (
                <a
                  key={"top-nav-item-" + title}
                  {...props}
                  title={description}
                  className={
                    "mr-5 pl-5 last-of-type:mr-0 hover:text-background"
                  }
                >
                  {title}
                </a>
              ))}
            </nav>
          </Container>
        </div>
        <nav
          className={"border-b border-solid border-b-gray-200 bg-background"}
        >
          <Container className={"flex items-center justify-between py-4"}>
            <a href={"/"} className={""}>
              LOGO
            </a>

            <div className="flex flex-1 items-center justify-end space-x-6">
              <a
                href="#"
                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <span
                className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                aria-hidden="true"
              />
              <a
                href="#"
                className="group flex items-center space-x-2 rounded-xl bg-red-50 px-4 py-2.5"
              >
                <ShoppingBag
                  className="aspect-square h-5 shrink-0 text-primary/70"
                  aria-hidden="true"
                />
                <span
                  className="mx-4 h-6 w-px bg-red-100 lg:mx-6"
                  aria-hidden="true"
                />
                <span className={"hidden font-medium"}>
                  Dokoncit objednavku
                </span>
                <span className={"font-medium"}>Jit nakupovat</span>
                <span className="ml-2 hidden rounded-xl border border-solid bg-primary px-1.5 text-sm font-bold text-white">
                  0
                </span>
                <span className="ml-2 rounded-xl border border-solid bg-primary px-1.5 text-sm font-bold text-white">
                  <ArrowRight />
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </Container>
        </nav>
      </EmptyLayout>
    </>
  )
}

export default Shop
