"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "../lib/cn";

// Hoisted to a plain identifier: Next's RSC client-reference collector
// cannot statically resolve dotted member expressions (`motion.div`)
// used directly as a JSX tag, which breaks the client manifest at build time.
const MotionDiv = motion.div;

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Radius (px) of the spotlight radial gradient. */
  spotlightSize?: number;
}

/**
 * Card that tracks the cursor and renders a radial gradient "spotlight"
 * (accent color, low opacity) following the mouse. Position is driven
 * entirely by Framer Motion motion values / CSS custom properties — no
 * per-frame React re-renders.
 */
export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ className, spotlightSize = 350, children, ...props }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
      const bounds = event.currentTarget.getBoundingClientRect();
      mouseX.set(event.clientX - bounds.left);
      mouseY.set(event.clientY - bounds.top);
    }

    const background = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${mouseX}px ${mouseY}px, var(--accent-500) 0%, transparent 70%)`;

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm",
          className
        )}
        {...props}
      >
        <MotionDiv
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-base ease-out group-hover:opacity-20"
          style={{ background }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
SpotlightCard.displayName = "SpotlightCard";
