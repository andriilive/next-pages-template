// noinspection ES6UnusedImports

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenuContent as _NavigationMenuContent,
  NavigationMenuTrigger as _NavigationMenuTrigger,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import { NavItem } from "@/src/data"
import { cn } from "@/src/lib/utils"

export function Nav({ navItems, aria }: { aria: string; navItems: NavItem[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map(({ title, ...props }, index) => (
          <NavigationMenuItem key={`${aria}-nav-${index}`}>
            <Link {...props} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
