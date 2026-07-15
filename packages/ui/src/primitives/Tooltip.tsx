"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/cn";

// See Button.tsx for why `motion.div` is hoisted to a plain identifier.
const MotionDiv = motion.div;

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {}

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 6, children, ...props }, ref) => (
  <TooltipPrimitive.Portal forceMount>
    <AnimatePresence>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        asChild
        {...props}
      >
        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "z-50 overflow-hidden rounded-md border border-border bg-card px-3 py-1.5 text-xs text-card-foreground shadow-md",
            className
          )}
        >
          {children}
        </MotionDiv>
      </TooltipPrimitive.Content>
    </AnimatePresence>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = "TooltipContent";
