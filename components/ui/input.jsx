import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[62px] w-full border-white/10 bg-white/5 px-6 py-2 text-white placeholder:text-white/80 focus-visible:outline-none cofus-visible:ring-1 focus-visible:ring-orange disabled:cursor-non-allowed disabled:opacity-50",
        className
      )}
      {...props} />
  );
}

export { Input }
