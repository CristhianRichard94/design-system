import * as React from "react";
import { cn } from "../lib/cn";

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CSS grid container for bento-style layouts. Children (BentoGridItem)
 * declare their own column/row span.
 */
export const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
          className
        )}
        {...props}
      />
    );
  }
);
BentoGrid.displayName = "BentoGrid";
