"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Note: We need to install class-variance-authority and @radix-ui/react-slot if we want full shadcn-like power,
// but for now I will implement a standard tailwind button to save dependencies if they aren't installed.
// Wait, I didn't install cva or radix-slot. I'll stick to simple props for now or add them.
// Let's stick to a robust simpler version to avoid extra deps for now unless requested.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    // Variant styles
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-teal-500 text-white hover:bg-teal-600",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }
    
    // Size styles
    const sizes = {
      sm: "h-9 px-3",
      md: "h-11 px-6 py-2", // larger default for ease of use
      lg: "h-14 px-8 text-base",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
