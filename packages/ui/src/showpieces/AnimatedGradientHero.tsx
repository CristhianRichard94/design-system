"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

// Hoisted to a plain identifier: Next's RSC client-reference collector
// cannot statically resolve dotted member expressions (`motion.div`)
// used directly as a JSX tag, which breaks the client manifest at build time.
const MotionDiv = motion.div;

export interface AnimatedGradientHeroProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Hero section wrapper with a slow-looping animated accent gradient behind
 * slotted children (title/subtitle/CTA). Gradient animation runs on
 * transform/background-position only, via Framer Motion.
 */
export const AnimatedGradientHero = React.forwardRef<HTMLDivElement, AnimatedGradientHeroProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative isolate overflow-hidden rounded-lg border border-border bg-bg px-6 py-24 text-center",
          className
        )}
        {...props}
      >
        <MotionDiv
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 20% 20%, var(--accent-700) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, var(--accent-500) 0%, transparent 60%), radial-gradient(60% 60% at 50% 90%, var(--accent-900) 0%, transparent 60%)",
            backgroundSize: "200% 200%",
            opacity: 0.35
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
AnimatedGradientHero.displayName = "AnimatedGradientHero";
