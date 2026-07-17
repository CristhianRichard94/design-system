"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/cn";

// See Button.tsx for why `motion.div` is hoisted to a plain identifier.
const MotionDiv = motion.div;

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 6, ...props }, ref) => (
  <PopoverPrimitive.Portal forceMount>
    <AnimatePresence>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        asChild
        forceMount
        {...props}
      >
        <MotionDiv
          initial={{ opacity: 0, scale: 0.96, y: -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -4 }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "z-50 w-72 rounded-md border border-border bg-card p-4 text-card-foreground shadow-md outline-none",
            className
          )}
        >
          {props.children}
        </MotionDiv>
      </PopoverPrimitive.Content>
    </AnimatePresence>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = "PopoverContent";
