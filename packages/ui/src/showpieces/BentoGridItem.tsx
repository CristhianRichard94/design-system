"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

// Hoisted to a plain identifier: Next's RSC client-reference collector
// cannot statically resolve dotted member expressions (`motion.div`)
// used directly as a JSX tag, which breaks the client manifest at build time.
const MotionDiv = motion.div;

export interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of grid columns to span (1 or 2). */
  colSpan?: 1 | 2;
  /** Number of grid rows to span (1 or 2). */
  rowSpan?: 1 | 2;
}

const colSpanClasses: Record<1 | 2, string> = {
  1: "sm:col-span-1",
  2: "sm:col-span-2"
};

const rowSpanClasses: Record<1 | 2, string> = {
  1: "row-span-1",
  2: "row-span-2"
};

/**
 * Bento grid cell with a subtle hover lift and glow border, using the
 * existing --shadow-glow token.
 */
export const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ className, colSpan = 1, rowSpan = 1, children, ...props }, ref) => {
    return (
      <MotionDiv
        ref={ref}
        className={cn(
          "flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm transition-shadow duration-base ease-out hover:border-accent-500 hover:shadow-glow",
          colSpanClasses[colSpan],
          rowSpanClasses[rowSpan],
          className
        )}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        {...(props as React.ComponentPropsWithoutRef<typeof MotionDiv>)}
      >
        {children}
      </MotionDiv>
    );
  }
);
BentoGridItem.displayName = "BentoGridItem";
