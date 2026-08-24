"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Renders a styled label element with support for custom classes and standard label properties.
 *
 * @param className - Additional classes to apply to the label
 * @param props - Standard label properties
 */
function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
