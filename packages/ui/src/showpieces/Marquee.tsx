import * as React from "react";
import { cn } from "../lib/cn";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Seconds for one full loop. Lower = faster. */
  speed?: number;
  direction?: "left" | "right";
  /** Pause the animation on hover. */
  pauseOnHover?: boolean;
}

/**
 * Horizontal infinite-scroll marquee. Built with a pure CSS keyframe
 * animation (translateX loop over a duplicated track) — no JS rAF loop.
 */
export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    { className, speed = 30, direction = "left", pauseOnHover = true, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("group relative flex w-full overflow-hidden", className)}
        {...props}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className={cn(
              "flex min-w-full shrink-0 items-center justify-around gap-8",
              "animate-marquee",
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal"
            }}
          >
            {children}
          </div>
        ))}
      </div>
    );
  }
);
Marquee.displayName = "Marquee";
