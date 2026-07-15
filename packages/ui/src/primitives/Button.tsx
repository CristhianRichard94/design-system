"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

// Hoisted to a plain identifier: Next's RSC client-reference collector
// cannot statically resolve dotted member expressions (`motion.button`)
// used directly as a JSX tag, which breaks the client manifest at build time.
const MotionButton = motion.button;

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md",
    "text-sm font-medium transition-colors duration-fast ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    "disabled:pointer-events-none disabled:opacity-50"
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-accent text-accent-foreground hover:bg-accent-400 shadow-sm hover:shadow-glow",
        outline:
          "border border-border bg-transparent text-fg hover:border-accent-500 hover:text-accent-400",
        ghost: "bg-transparent text-fg hover:bg-muted",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-90 shadow-sm"
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size }), className)}
          ref={ref}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        />
      );
    }

    return (
      <MotionButton
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.12 }}
        {...(props as React.ComponentPropsWithoutRef<typeof MotionButton>)}
      />
    );
  }
);
Button.displayName = "Button";
