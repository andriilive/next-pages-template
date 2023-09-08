import { SectionProps } from "@nextui-org/aria-utils"
import { clsx } from "clsx"

export default function Container({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <div
      className={className ? clsx(className, "container") : "container"}
      {...props}
    >
      {children}
    </div>
  )
}
